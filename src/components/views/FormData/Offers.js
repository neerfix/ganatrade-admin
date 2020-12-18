import React, {Component} from "react";
import {Form} from "react-bootstrap";
import routeAPI from "../../../tools/routeAPI";
import FieldText from "./FieldText";
import FooterForm from "./FooterForm";
// import getToken from "../../../functions/getToken";
// const token = getToken();

export default class Offers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenACP: "",
            dataType: this.props.dataType,
            create: "POST",
            edit: "PATCH",
            toastMessage: "",
            toastType: "",
            data: {"title": "", "category": "", "user_id": "", "description": "",
                "product": {
                            "name": "",
                            "condition": "",
                            },
                "trade": {
                    "method": "",
                },
             },

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
                            user_id: json.user_id,
                            description: json.description,
                            product: {
                                name: json.name,
                                condition: json.condition,
                            },
                            category: json.category,
                            trade: {
                                method: json.method,
                            }
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
        let route = routeAPI + 'offers/';
        if(id){
            route = routeAPI + 'offers/' + id
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
                description: this.state.description,
                user_id: this.state.user_id,
                product: {
                    name: this.state.name,
                    condition: this.state.condition,
                },
                category: this.state.category,
                trade: {
                    method: this.state.method,
                }
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
                        toastMessage: 'An error occurred while creating the offer: ' + r.statusText,
                        toastType: 'error'
                    });
                }
            })
            .catch(e => {
                this.setState({
                    toastMessage: 'An error occurred while creating the offer: ' + e.message,
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
                <FieldText defaultValue={this.state.data.title} title={"Title"} name={"title"} id={"title"} placeholder={""} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.description} title={"Description"} name={"description"} id={"description"} placeholder={""} type={'textarea'}  rows="3" handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.user_id} title={"user_id"} name={"user_id"} id={"user_id"} placeholder={""} type={'textarea'}  rows="3" handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.product.name} title={"Product Name"} name={"name"} id={"Product Name"} placeholder={""} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.product.condition} title={"Product Condition"} name={"condition"} id={"Product Condition"} placeholder={""} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.category} title={"category"} name={"category"} id={"category"} placeholder={""} type={'text'} handleChange={this.handleChange}/>
                <FieldText defaultValue={this.state.data.trade.method} title={"method"} name={"method"} id={"method"} placeholder={""} type={'text'} handleChange={this.handleChange}/>
            </Form.Row>


            <FooterForm showT={this.props.showT} toastMessage={this.state.toastMessage} toastType={this.state.toastType}/>
        </Form>;
    }
}
