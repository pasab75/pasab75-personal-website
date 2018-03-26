import React, { Component } from "react";
import { Link } from "redux-little-router";
import { Menu, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// Exports our bootstrap style bar for use in the router
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleItemClick = (e, { name }) =>
            this.setState({ activeItem: name });
    }
    render() {
        const { activeItem } = this.state;
        return (
            <div id="NavigationBar">
                <Menu>
                    <Menu.Item
                        name="Home"
                        active={activeItem === "Home"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="About"
                        active={activeItem === "About"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Contact"
                        active={activeItem === "Contact"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Projects"
                        active={activeItem === "Projects"}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        );
    }
}
