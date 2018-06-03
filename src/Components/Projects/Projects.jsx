import React, { Component } from "react"
import { Fragment } from "redux-little-router"

export default class Projects extends Component {
    render() {
        return (
            <Fragment forRoute="/Projects">
                <div>
                    <h2>hi</h2>
                    <p>this is the projects page</p>
                </div>
            </Fragment>
        )
    }
}
