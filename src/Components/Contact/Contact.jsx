import React, { Component } from "react";
import { Fragment } from "redux-little-router";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment forRoute="/Contact">
                <h2>hi</h2>
                <p>this is the contact page</p>
            </Fragment>
        );
    }
}
