import React, { Component } from "react"
import { Fragment } from "redux-little-router"
import { Form } from "semantic-ui-react"
import styled from "styled-components"
import linkedin from "./static/LinkedIn.png"
import githubLogo from "./static/github-logo.png"
import validator from "validator"

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
    padding: 0px 10px;
    display: inline-flex;
    flex-direction: column;
    align-content: space-between;
`;

let StyledA = styled.a`
    display: block;
    max-width: 50px;
    width: auto;
    height: auto;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;

let ButtonImage = styled.img`
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
`;

export default class Contact extends Component {
    state = {
        formEmail: "",
        formName: "",
        formMessage: "",
    };

    handleChange = type => e => {
        this.setState({[type]: e.target.value});
    };

    submitForm = async () => {
        const url = "https://an3g0x37r9.execute-api.us-east-1.amazonaws.com/PROD/v1/contact";
        const body = {email:this.state.formEmail, name:this.state.formName, message:this.state.formMessage};
        let response = await(
            await fetch(url,
                {
                    body: JSON.stringify(body),
                    method: "POST",
                    cache: "no-cache",
                    "Access-Control-Allow-Origin":"*"
                }
            )
        ).json();
    };

    render() {
        return (
            <Fragment forRoute="/Contact">
                <EightyPercentSection>
                    <h2>Feel Free to Reach Out</h2>
                    <FlexBoxRow>
                        <Form>
                            <Form.Input
                                id="email"
                                value={this.state.formEmail}
                                onChange={this.handleChange("formEmail")}
                                placeholder="Your e-mail address"
                                error={
                                    this.state.formEmail !== null &&
                                    !validator.isEmail(this.state.formEmail)
                                }
                            />
                            <Form.Input
                                id="name"
                                value={this.state.formName}
                                onChange={this.handleChange("formName")}
                                placeholder="Your name"
                            />
                            <Form.TextArea
                                id="message"
                                value={this.state.formMessage}
                                onChange={this.handleChange("formMessage")}
                                placeholder="Your message"
                            />
                            <Form.Button onClick={this.submitForm}>Submit</Form.Button>
                        </Form>
                        <FlexBoxColumn>
                            <StyledA href="https://github.com/pasab75">
                                <ButtonImage src={githubLogo} alt="github" />
                            </StyledA>
                            <StyledA href="https://www.linkedin.com/in/paul-sabatino-4b800247">
                                <ButtonImage src={linkedin} alt="linkedin" />
                            </StyledA>
                        </FlexBoxColumn>
                    </FlexBoxRow>
                </EightyPercentSection>
            </Fragment>
        );
    }
}
