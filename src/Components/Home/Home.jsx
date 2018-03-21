import React, { Component } from "react";
import { Fragment } from "redux-little-router";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment forRoute="/">
                <h2>hi</h2>
                <p>this is the home page</p>
            </Fragment>
        );
    }
}
