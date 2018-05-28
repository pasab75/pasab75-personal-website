import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class SkillCard extends Component {
    static propTypes = {
        onMenuClick: PropTypes.func,
        image: PropTypes.any,
        imageStyle: PropTypes.object,
        headerText: PropTypes.string,
        metaText: PropTypes.string,
        metaType: PropTypes.string,
        descriptionText: PropTypes.string
    };

    render() {
        const { image, headerText, metaText, metaType, descriptionText } = this.props;
        return (
            <Card centered={true}>
                <Image src={image} circular={true} size="medium" style={imageStyle} />
                <Card.Content>
                    <Card.Header>{headerText}</Card.Header>
                    <Card.Meta>
                        <span className={metaType}>{metaText}</span>
                    </Card.Meta>
                    <Card.Description>{descriptionText}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}
