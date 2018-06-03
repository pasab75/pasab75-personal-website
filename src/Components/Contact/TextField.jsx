import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

export default class TextField extends Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string
    };
    state = {};

    render() {
        return (
            <section>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type="text"
                    className="form-control"
                    id={this.props.id}
                    ref={this.props.id}
                />
            </section>
        );
    }
}
