import React, { Component } from "react";
import { Fragment } from "redux-little-router";

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment forRoute="/About">
                <div>
                    <h2>hi</h2>
                    <p>this is the about page</p>
                </div>
            </Fragment>
        );
    }
}
