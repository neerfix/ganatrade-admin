import React, {Component} from "react";
import {Form} from "react-bootstrap";
import routeAPI from "../../../tools/routeAPI";
import FieldText from "./FieldText";
import FooterForm from "./FooterForm";
// import getToken from "../../../functions/getToken";
// const token = getToken();

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenACP: "",
            dataType: this.props.dataType,
            create: "POST",
            edit: "PATCH",
            toastMessage: "",
            toastType: "",
            data: {"title": "", "description": "",}
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
                            title: json.title,
                            description: json.description
                        });
                    }
                }).catch(e => {
                    console.log(e.code);
                    console.log(e.message)
                })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.id;
        let route = routeAPI + 'categories/';
        if(id){
            route = routeAPI + 'categories/' + id
        }
        console.log(this.state);
        fetch(route, {
            method: this.state[this.props.action],
            headers: {
                'Authorization': this.state.tokenACP,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description
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
                        toastMessage: 'An error occurred while creating the category: ' + r.statusText,
                        toastType: 'error'
                    });
                }
            })
            .catch(e => {
                this.setState({
                    toastMessage: 'An error occurred while creating the category: ' + e.message,
                    toastType: 'error'
                });
            });
        this.props.showToasts();
        this.props.delayToHide();
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Row>
                <FieldText defaultValue={this.state.data.title} title={"Title"} name={"title"} id={"title"} placeholder={"Travel"} type={'text'} handleChange={this.handleChange}/>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control defaultValue={this.state.data.description} name="description" as="textarea" rows="3" onChange={this.handleChange}/>
            </Form.Group>

            <FooterForm showT={this.props.showT} toastMessage={this.state.toastMessage} toastType={this.state.toastType}/>
        </Form>;
    }
}
