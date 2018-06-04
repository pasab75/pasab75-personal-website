import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import {Form} from 'semantic-ui-react';
import styled from "styled-components";
import linkedin from "./static/LinkedIn.png";
import githubLogo from "./static/github-logo.png";
let EightyPercentSection = styled.section`
    text-align: left;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 20px;
`;

let FlexBoxRow = styled.section`
    display: inline-flex;
    flex-direction: row;
    align-content: space-between;
`;

let FlexBoxColumn = styled.section`
    padding: 10px;
    display: inline-flex;
    flex-direction: column;
    align-content: space-between;
`;

let ButtonImage = styled.img`
    max-width: 5%;
`;

export default class Contact extends Component {
    state = {
        isValidated: false,
        name: "",
        email: "",
        message: ""
    };

    validate = () => {

    };

    handleChange = (e, {name, value}) => this.setState({
        [name]:value 
    });

    submitHandler = (event) => {
        event.preventDefault();
        if(this.validate()){
            console.log("Hi we validated");
        }

    };
    render() {
        return (
            <Fragment forRoute="/Contact">
                <EightyPercentSection>
                    <h2>Feel Free to Reach Out</h2>
                    <FlexBoxRow>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Input name="email" placeholder="Your e-mail address" onChange={this.handleChange} />
                            <Form.Input name="name" placeholder="Your name"/>
                            <Form.TextArea name="message" placeholder='Your message' />
                            <Form.Button>Submit</Form.Button>
                        </Form>
                        <FlexBoxColumn>
                            <a href="https://github.com/pasab75">
                                <ButtonImage src={githubLogo} alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/paul-sabatino-4b800247">
                                <ButtonImage src={linkedin} alt="linkedin"/>
                            </a>
                        </FlexBoxColumn>
                    </FlexBoxRow>
                </EightyPercentSection>
            </Fragment>
        );
    }
}
