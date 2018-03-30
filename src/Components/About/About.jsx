import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import {Card, Image, Grid} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DockerImage from "./static/docker.png";
import NodeImage from "./static/nodejs.png";
import PythonImage from "./static/python-logo.png";

export default class About extends Component {
    render() {
        return (
            <Fragment forRoute="/About">
                <div>
                    <div>
                        <h2>Skills</h2>
                        <Grid stackable={true}>
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
                                            Using Docker, RabbitMQ, Nifi, AWS,
                                            or Storm; I've experiance designing
                                            automated solutions
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card centered={true}>
                                <Image src={DockerImage} circular={true} />
                                <Card.Content>
                                    <Card.Header>AWS</Card.Header>
                                    <Card.Meta>
                                        <span className="date">
                                            Expert with experiance since 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <p>
                                            Lambda, S3, EC2, SNS, and SQS may
                                            all sound like a foriegn language
                                            but I've built robust solutions
                                            utilzing AWS services for fractions
                                            of what we were paying for internal
                                            hosting.
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
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
                                            Using Docker, RabbitMQ, Nifi, AWS,
                                            or Storm; I've experiance designing
                                            automated solutions
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid>
                    </div>
                    <div>
                        <h2>Languages</h2>
                        <Grid stackable={true}>
                            <Card centered={true}>
                                <Image
                                    style={{
                                        "padding-top": "20px",
                                        "padding-bottom": "20px"
                                    }}
                                    src={PythonImage}
                                    circular={true}
                                />
                                <Card.Content>
                                    <Card.Header>Python</Card.Header>
                                    <Card.Meta>
                                        <span className="date">
                                            Expert with experiance since 2013
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <p>
                                            For simple, elegant code, it's hard
                                            to beat Python. I've writen large
                                            frameworks, Asynchronous web
                                            servers, and data science analytics
                                            all using Pythons.
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card centered={true}>
                                <Image
                                    style={{
                                        "padding-top": "20px",
                                        "padding-bottom": "20px"
                                    }}
                                    src={PythonImage}
                                    circular={true}
                                />
                                <Card.Content>
                                    <Card.Header>Python</Card.Header>
                                    <Card.Meta>
                                        <span className="date">
                                            Expert with experiance since 2013
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <p>
                                            For simple, elegant code, it's hard
                                            to beat Python. I've writen large
                                            frameworks, Asynchronous web
                                            servers, and data science analytics
                                            all using Pythons.
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card centered={true}>
                                <Image src={NodeImage} circular={true} />
                                <Card.Content>
                                    <Card.Header>Node.js</Card.Header>
                                    <Card.Meta>
                                        <span className="date">
                                            Expert with experiance since 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <p>
                                            I delight in building with Express,
                                            Websockets, Asynchronous
                                            Programming, and so much more. Node
                                            is a lovely language for modern web
                                            development.
                                        </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid>
                    </div>
                </div>
            </Fragment>
        );
    }
}
