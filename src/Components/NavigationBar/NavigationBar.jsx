import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler } from "reactstrap";
import { Link, PersistentQueryLink } from "redux-little-router";
import "../../Static/bootswatch.scss";

// Exports our bootstrap style bar for use in the router
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar>
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
