import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "redux-little-router";
import "../../Static/bootswatch.css";

// Exports our bootstrap style bar for use in the router
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="NavigationBar">
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" href="/">
                        Sabatino
                    </Link>
                    <Nav className="m1-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" href="/About">
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" href="/Contact">
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" href="/Projects">
                                Projects
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
