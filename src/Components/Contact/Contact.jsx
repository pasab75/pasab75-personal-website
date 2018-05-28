import React, { Component } from "react"
import { Fragment } from "redux-little-router"

export default class Contact extends Component {
    render() {
        return (
            <Fragment forRoute="/Contact">
                <div>
                    <h2>hi</h2>
                    <p>this is the contact page</p>
                </div>
            </Fragment>
        )
    }
}
