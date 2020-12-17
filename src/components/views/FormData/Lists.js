import React, {Component} from "react";
import {Form} from "react-bootstrap";
import routeAPI from "../../../tools/routeAPI";
import FieldText from "./FieldText";
import FooterForm from "./FooterForm";
import getToken from "../../../functions/getToken";
import Switch from "./Switch";
const token = getToken();
export default class Lists extends Component {

    constructor(props) {
        super(props);
            this.state = {
                tokenACP: token,
                dataType: this.props.dataType,
                create: "POST",
                edit: "PUT",
                data: {"title": "", "description": "", "category": "", "user": "", "is_active": true, "is_private": false},
                is_active: true,
                is_private: false
            };
    }

    async componentDidMount() {
        if(this.props.action === 'edit'){
            await fetch(routeAPI + this.state.dataType + "/" + this.props.id, {
                headers: { 'Authorization': this.state.tokenACP },
            }).then(response => response.json())
                .then(json => {
                    if(json){
                        this.setState({
                            data: json,
                            apiLoaded: true,
                            categoryId: json.category,
                            userId: json.user,
                            title: json.title,
                            description: json.description,
                            is_active: json.is_active,
                            is_private: json.is_private
                        });
                    }
                }).catch(e => {
                    console.log(e.code)
                    console.log(e.message)
                })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.id
        let route = routeAPI + 'lists/';
        if(id){
            route = routeAPI + 'lists/' + id
        }
        fetch( route, {
            method: this.state[this.props.action],
            headers: {
                'Authorization': this.state.tokenACP,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                user: this.state.userId,
                category: this.state.categoryId,
                description: this.state.description,
                is_private: this.state.is_private,
                is_active: this.state.is_active,
            })
        })
            .then(r => {
                if(r.ok){
                    this.setState({
                        toastMessage: 'The action was successfully completed',
                        toastType: 'success'
                    })
                }else{
                    this.setState({
                        toastMessage: 'An error occurred while creating the list: ' + e.message,
                        toastType: 'error'
                    });
                }
            })
            .catch(e => {
                this.setState({
                    toastMessage: 'An error occurred while creating the list: ' + e.message + ": " + e.code,
                    toastType: 'error'
                });
            });
        this.props.showToasts();
        this.props.delayToHide();
    };

    handleChange = (e) => {
        e.preventDefault();
        if(e.target.type === "checkbox"){
            this.setState({
                [e.target.name]: e.target.checked
            });
        }else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Row>
                <FieldText defaultValue={this.state.data.title} title={"Title"} name={"title"} id={"title"} placeholder={"My first list"} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.user} title={"User"} name={"userId"} id={"userId"} placeholder={"user"} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.category} title={"Category"} name={"categoryId"} id={"categoryId"} placeholder={"category"} type={'text'} handleChange={this.handleChange}/>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control defaultValue={this.state.data.description} name="description" as="textarea" rows="3" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Row>
                <Switch label={"Is Active ?"} id={"isActive"} name={"is_active"} handleChange={this.handleChange} checked={this.state.is_active}/>
                <Switch label={"Is Private ?"} id={"isPrivate"} name={"is_private"} handleChange={this.handleChange} checked={this.state.is_private}/>
            </Form.Row>

            <FooterForm showT={this.props.showT} toastMessage={this.state.toastMessage} toastType={this.state.toastType}/>
        </Form>;
    }
}
