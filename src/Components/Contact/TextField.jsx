import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string
    };
    state = {};
    render() {
        return (
            <input
                type="text"
                className="form-control"
                id={this.props.id}
                ref={this.props.id}
            />
        );
    }
}
