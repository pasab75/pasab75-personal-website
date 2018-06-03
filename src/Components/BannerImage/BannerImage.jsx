import React, { Component } from "react"
import GrayClimbImage from "./static/gray_climb.png"
import styled from "styled-components"

const StyledImg = styled.img`
    padding-top: 10px;
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    margin: 0 auto;
`;

const ContainerDiv = styled.section`
    position: relative;
    text-align: center;
    color: white;
    max-height: 600px;
`;

// const CenteredBoldText = styled.section`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-weight: bold;
// `;

const CenteredText = styled.section`
    position: absolute;
    top: 50%;
    left: 72%;
    transform: translate(-50%, -50%);
`;

const StrongText = styled.strong`
    color: #fff;
    display: block;
    font-family: pier, serif;
    font-size: 5em;
    font-style: normal;
    font-weight: 700;
    line-height: 1em;
`;

export default class About extends Component {
    render() {
        return (
            <ContainerDiv>
                <StyledImg alt="Climbing" src={GrayClimbImage} />
                <CenteredText>
                    <p>
                        <em>Full Stack Developer and DevOps Practicioner</em>
                    </p>
                    <p>
                        <StrongText>
                            Passionate about Maintainable Solutions
                        </StrongText>
                    </p>
                </CenteredText>
            </ContainerDiv>
        )
    }
}
