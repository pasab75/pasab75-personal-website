import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import {Image} from "semantic-ui-react";
export default class Home extends Component {
    render() {
        return (
            <Fragment forRoute="/">
                <div>
                    <h2>hi</h2>
                    <p>this is the home page</p>
                    <section style={{width: "100%"}} />
                </div>
            </Fragment>
        );
    }
}
