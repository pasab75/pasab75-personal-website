import React, { Component } from "react";
import { Fragment } from "redux-little-router";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DockerImage from "./static/vertical.png";

export default class About extends Component {
    render() {
        return (
            <Fragment forRoute="/About">
                <div>
                    <h2>hi</h2>
                    <p>this is the about page</p>
                    <p>Alright lets demo a card about Paul</p>
                    <Card centered={true}>
                        <Image src={DockerImage} circular={true} />
                        <Card.Content>
                            <Card.Header>DevOps</Card.Header>
                            <Card.Meta>
                                <span className="date">
                                    Expert with experiance since 2015
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                <p>
                                    Using Docker, RabbitMQ, Nifi, AWS, or Storm;
                                    I've experience designing automated
                                    solutions
                                </p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </Fragment>
        );
    }
}
