import React, {Component} from "react";
import {Form} from "react-bootstrap";
import routeAPI from "../../../tools/routeAPI";
import FieldText from "./FieldText";
import FooterForm from "./FooterForm";
import getToken from "../../../functions/getToken";
const token = getToken();

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenACP: token,
            dataType: this.props.dataType,
            create: "POST",
            edit: "PATCH",
            data: { authorId: "", content: "", createdAt: "", note: ""},
            deactivate: false,
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
                            apiLoaded: true,
                            authorId: json.authorId,
                            content: json.content,
                            createdAt: json.createdAt,
                            note: json.note,
                        });
                    }
                }).catch(e => {
                    console.log(e.code)
                    console.log(e.message)
                })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let id = this.props.id;
        let route = routeAPI + 'users/reviews';
        if (id) {
            route = routeAPI + 'users/' + id + '/reviews'
        }
        try {
            await fetch(route, {
                method: this.state[this.props.action],
                headers: {
                    'Authorization': this.state.tokenACP,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    authorId: this.state.authorId,
                    content: this.state.content,
                    createdAt: this.state.createdAt,
                    note: this.state.note,
                })
            })
                .then(r => {
                    console.log(r)
                    if (r.ok) {
                        this.setState({
                            toastMessage: 'The action was successfully completed',
                            toastType: 'success'
                        })
                    } else {
                        this.setState({
                            toastMessage: 'An error occurred while creating the user: ' + e.message,
                            toastType: 'error'
                        });
                    }
                });
            this.props.showToasts();
            this.props.delayToHide();
        } catch (e) {
            console.log(e)
            this.setState({
                toastMessage: 'An error occurred while creating the user: ' + e.message,
                toastType: 'error'
            });
            this.props.showToasts();
            this.props.delayToHide();
        }

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
                <FieldText defaultValue={this.state.data.content} title={"Content"} name={"content"} id={"content"} placeholder={"Enter the context here"} type={'content'} handleChange={this.handleChange}/>
            </Form.Row>

            <Form.Row>
                <FieldText defaultValue={this.state.data.note} title={"Note"} name={"note"} id={"note"} placeholder={"Mets 10 ou jte fume"} type={'note'} handleChange={this.handleChange}/>
            </Form.Row>


            <FooterForm showT={this.props.showT} toastMessage={this.state.toastMessage} toastType={this.state.toastType}/>
        </Form>;
    }
}
