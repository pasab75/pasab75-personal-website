import React, { Component } from "react";
import { Fragment } from "redux-little-router";

export default class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment forRoute="/Projects">
                <h2>hi</h2>
                <p>this is the projects page</p>
            </Fragment>
        );
    }
}
