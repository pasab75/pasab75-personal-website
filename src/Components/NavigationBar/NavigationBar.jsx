import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import "../../Static/bootswatch.scss";

// Exports our bootstrap style bar for use in the router
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>hi</h2>
                <p>this is the home page</p>
            </div>
        );
    }
}
