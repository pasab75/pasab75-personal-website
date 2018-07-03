import React, { Component } from "react";
import { Fragment } from "redux-little-router";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import linkedin from "./static/LinkedIn.png";
import githubLogo from "./static/github-logo.png";
import validator from "validator";

const EightyPercentSection = styled.section`
    text-align: left;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 20px;
`;

const FlexBoxRow = styled.section`
    display: inline-flex;
    flex-direction: row;
    align-content: space-between;
`;

const FlexBoxColumn = styled.section`
    padding: 0px 10px;
    display: inline-flex;
    flex-direction: column;
    align-content: space-between;
`;

const StyledA = styled.a`
    display: block;
    max-width: 50px;
    width: auto;
    height: auto;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;

const ButtonImage = styled.img`
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
`;

const ErrorSection = styled.section`
    background: #c51244 !important;
    padding: 10px !important;
    border-radius: 0 !important;
    position: relative; 
    display: inline-block !important;
    box-shadow: 1px 1px 1px #aaaaaa;
    margin-top: 10px;
    padding: 10px;
`;

const SubmitSection = styled.section`
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: white;
    position: absolute;
    margin-top: 10px;
    padding: 10px;
    box-shadow: 1px 1px 1px #aaaaaa;
`;

export default class Contact extends Component {
    state = {
        formEmail: "",
        formName: "",
        formMessage: "",
        error: null,
        submit: false
    };

    handleChange = type => e => {
        this.setState({[type]: e.target.value, submit: false, error: false});
    };

    submitForm = async () => {
        try{
            const url = "https://an3g0x37r9.execute-api.us-east-1.amazonaws.com/PROD/v1/contact";
            const body = {email:this.state.formEmail, name:this.state.formName, message:this.state.formMessage};
            fetch(url,
                {
                    body: JSON.stringify(body),
                    method: "POST",
                    cache: "no-cache",
                    "Access-Control-Allow-Origin":"*"
                }
            ).then( (response) => {
                console.log(response);
                if (response.status !== 200 && response.status !== 304) this.setState({error: `There was an error reaching out to the server, give it a bit, and try again later. ${response}`});
                this.setState({submit: true});
            }).catch( (ex) => {
                this.setState({error:"There was an error reaching out to the server, give it a bit, and try again later."});
            });
        }catch(ex){
            this.setState({error:"There was an error reaching out to the server, give it a bit, and try again later."});
        }
    };

    render() {
        return (
            <Fragment forRoute="/Contact">
                <EightyPercentSection>
                    <h2>Feel Free to Reach Out</h2>
                    { 
                        this.state.error && 
                        <section>
                        <ErrorSection>
                            {this.state.error}
                        </ErrorSection>
                        </section>
                    }
                    { 
                        this.state.submit && 
                        <section>
                        <SubmitSection>
                            <p>Thanks for your message</p>
                        </SubmitSection>
                        </section>
                    }
                    <FlexBoxRow>
                        <Form>
                            <Form.Input
                                id="email"
                                value={this.state.formEmail}
                                onChange={this.handleChange("formEmail")}
                                placeholder="Your e-mail address"
                                error={
                                    this.state.formEmail !== "" &&
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
