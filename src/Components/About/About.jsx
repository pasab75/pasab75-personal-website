import React, {Component} from "react";
import PropTypes from "prop-types";
import {Fragment} from "redux-little-router";
import SkillCard from "./SkillCard";
import {Grid} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DockerImage from "./static/docker.png";
import NodeImage from "./static/nodejs.png";
import PythonImage from "./static/python-logo.png";
import StormImage from "./static/storm_logo.png";
import JavaImage from "./static/java.jpg";
import DataImage from "./static/datascience.jpg";

// const imageStyle = {
//     position: "relative",
//     backgroundPosition: "50% 50%",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// };

export default class About extends Component {
    render() {
        return (
            <Fragment forRoute="/About">
                <div>
                    <div>
                        <h2>Skills</h2>

                        <Grid stackable={true}>
                            <SkillCard
                                image={DockerImage}
                                headerText={"DevOps"}
                                metaText={"Expert with experiance since 2015"}
                                metaType={"date"}
                                descriptionText={
                                    "Using Docker, Ansible, or Kubernetes: I've helped designed low maintence environments."
                                }
                            />
                            <SkillCard
                                image={StormImage}
                                imageStyle={{padding: "15%"}}
                                headerText={"Automation"}
                                metaText={"Designing Socultions since 2015"}
                                metaType={"date"}
                                descriptionText={
                                    "Using RabbitMQ, Nifi, Hadoop or Storm; I've experiance designing automated solutions."
                                }
                            />
                            <SkillCard
                                image={DataImage}
                                headerText={"DataScience"}
                                metaText={"Expert with experiance since 2014"}
                                metaType={"date"}
                                descriptionText={
                                    "Using Hadoop, Panda, Map/Reduce; finding meaning in noisy data is a breeze."
                                }
                            />
                        </Grid>
                    </div>
                    <div>
                        <h2>Languages</h2>
                        <Grid stackable={true}>
                            <SkillCard
                                image={PythonImage}
                                imageStyle={{padding: "10%"}}
                                headerText={"Python"}
                                metaText={"Expert with experiance since 2013"}
                                metaType={"date"}
                                descriptionText={`For simple, elegant code, it's hard to beat Python. 
                                    I've writen large frameworks, Asynchronous web servers, and data science analytics                                 
                                    all using Pythons.`}
                            />
                            <SkillCard
                                image={NodeImage}
                                imageStyle={{padding: "10%"}}
                                headerText={"Node.js"}
                                metaText={"Expert with experiance since 2015"}
                                metaType={"date"}
                                descriptionText={`I delight in building with Express,
                                    Websockets, Asynchronous
                                    Programming, and so much more. Node
                                    is a lovely language for modern web
                                    development.`}
                            />
                            <SkillCard
                                image={JavaImage}
                                imageStyle={{padding: "15%"}}
                                headerText={"Java"}
                                metaText={"Expert with experiance since 2015"}
                                metaType={"date"}
                                descriptionText={`Write once, run everywhere is still as true today
                                    as it was 15 years ago.  Sometimes you need enterprise 
                                    solutions and Java is here for that.`}
                            />
                        </Grid>
                    </div>
                </div>
            </Fragment>
        );
    }
}
