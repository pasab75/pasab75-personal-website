import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "redux-little-router";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const textStyle = {
    color: "white"
};
const myColor = "#009688";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleItemClick = (e, { name }) => {
            this.setState({ activeItem: name });
            name = name === "Home" ? "/" : name;
            this.props.onMenuClick(name);
        };
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div id="NavigationBar">
                <Menu
                    secondary
                    style={{
                        "background-color": myColor,
                        color: "white",
                        "border-radius": "0px"
                    }}
                >
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="Home"
                            active={activeItem === "Home"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="About"
                            active={activeItem === "About"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="Contact"
                            active={activeItem === "Contact"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="Projects"
                            active={activeItem === "Projects"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    router: state.router
});
const mapDispatchToProps = dispatch => {
    return {
        onMenuClick: ref => {
            dispatch(push(ref));
        }
    };
};

NavigationBar.propTypes = {
    onMenuClick: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
// Exports our bootstrap style bar for use in the router
