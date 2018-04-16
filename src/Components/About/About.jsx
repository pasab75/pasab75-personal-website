import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import SkillCard from "./SkillCard";
import styled from "styled-components";
import {Card} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DockerImage from "./static/docker 800x600.png";
import NodeImage from "./static/nodejs 800x600.png";
import ReactImage from "./static/react 800x600.jpg";
import CSharpImage from "./static/c# 800x600.jpg";
import PythonImage from "./static/python-logo 800x600.png";
import StormImage from "./static/storm_logo 800x600.png";
import JavaImage from "./static/java 800x600.jpg";
import DataImage from "./static/datascience 800x600.jpg";

// const imageStyle = {
//     position: "relative",
//     backgroundPosition: "50% 50%",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// };

const ContainerDiv = styled.div`
    text-align: left;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

const StyledH2 = styled.h2`
    padding-top: 10px;
`;

export default class About extends Component {
    render() {
        return (
            <Fragment forRoute="/About">
                <section>
                    <ContainerDiv>
                        <StyledH2>I'm Experianced With:</StyledH2>
                        <Card.Group stackable={true}>
                            <SkillCard
                                image={DockerImage}
                                headerText={"DevOps"}
                                metaText={"Expert with experiance since 2015"}
                                metaType={"date"}
                                descriptionText={
                                    "Using Docker, Ansible, or Kubernetes: I've designed low maintence environments handling problems of all sizes."
                                }
                            />
                            <SkillCard
                                image={StormImage}
                                headerText={"Automation"}
                                metaText={"Designing Socultions since 2015"}
                                metaType={"date"}
                                descriptionText={
                                    "Using RabbitMQ, Nifi, or Storm; I've experiance designing automated solutions that can handle incoming onslaughts of data."
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
                            <SkillCard
                                image={PythonImage}
                                headerText={"Python"}
                                metaText={"Expert with experiance since 2013"}
                                metaType={"date"}
                                descriptionText={`For simple, elegant code, it's hard to beat Python. 
                                    I've writen large frameworks, Asynchronous web servers, and data science analytics                                 
                                    all using Pythons.  As a `}
                            />
                            <SkillCard
                                image={NodeImage}
                                headerText={"Node.js"}
                                metaText={"Expert with experiance since 2015"}
                                metaType={"date"}
                                descriptionText={`I delight in building with Express,
                                    Websockets, Asynchronous
                                    Programming, and so much more. Node
                                    is a lovely language for modern web
                                    development.  I've built low latency web
                                    frameworks using Node.js`}
                            />
                            <SkillCard
                                image={JavaImage}
                                headerText={"Java"}
                                metaText={"Expert with experiance since 2014"}
                                metaType={"date"}
                                descriptionText={`Write once, run everywhere is still as true today
                                    as it was 15 years ago.  Sometimes you need enterprise 
                                    solutions and Java is here for that. Java has enabled some of my
                                    best data processing work.`}
                            />
                        </Card.Group>
                    </ContainerDiv>
                    <ContainerDiv>
                        <StyledH2>I'm Knowledgable About</StyledH2>
                        <Card.Group stackable={true}>
                            <SkillCard
                                image={ReactImage}
                                headerText={"ReactJS"}
                                metaText={"Building websites with since 2017"}
                                metaType={"date"}
                                descriptionText={`Component Design that enabled templating, clear control flow, and declaritive programming.`}
                            />
                            <SkillCard
                                image={CSharpImage}
                                headerText={"C#"}
                                metaText={
                                    "Built a large scale data processing framework in 2015"
                                }
                                metaType={"date"}
                                descriptionText={`I can produce fast, scalable code that is easy to maintain with C#.`}
                            />
                            <SkillCard
                                image={CSharpImage}
                                headerText={"C#"}
                                metaText={
                                    "Built a large scale data processing framework in 2015"
                                }
                                metaType={"date"}
                                descriptionText={`I can produce fast, scalable code that is easy to maintain with C#.`}
                            />
                        </Card.Group>
                    </ContainerDiv>
                </section>
            </Fragment>
        );
    }
}
