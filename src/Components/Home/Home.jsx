import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import BannerImage from "../BannerImage/BannerImage";
import styled from "styled-components";
//import {Image} from "semantic-ui-react";

const TextSection = styled.section`
    position: relative;
    text-align: center;
    max-height: 600px;
`;

export default class Home extends Component {
    render() {
        return (
            <Fragment forRoute="/">
                <TextSection>
                    <BannerImage />
                    <h2>Hello, my name is Paul Sabatino</h2>
                    <p>
                        I'm a developer with 5 years of experience building
                        solutions for{" "}
                    </p>
                </TextSection>
            </Fragment>
        );
    }
}
