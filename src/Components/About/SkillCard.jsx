import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, Image} from "semantic-ui-react";
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
    state = {};

    render() {
        return (
            <Card centered={true}>
                <Image
                    src={this.props.image}
                    circular={true}
                    size="medium"
                    style={this.props.imageStyle}
                />
                <Card.Content>
                    <Card.Header>{this.props.headerText}</Card.Header>
                    <Card.Meta>
                        <span className={this.props.metaType}>
                            {this.props.metaText}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.descriptionText}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}
