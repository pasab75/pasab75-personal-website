import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, push } from "redux-little-router";
import { Menu, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const textStyle = {
    "color":"white"
}

class NavigationBar extends Component {
    state = {};
    
    handleItemClick = (e, { name }) => {
        this.setState({activeItem:name})
        name = (name === 'Home'? '/':name);
        this.props.onMenuClick(name);
    };

    render() {
        const { activeItem } = this.state;
        return (
            <div id="NavigationBar">
                <Menu
                    secondary
                    style={
                        {
                            "background-color":"#009688", 
                            "color":"white",
                            "border-radius":"0px",
                        }
                    }
                >
                    <Menu.Menu 
                        position="right"
                        
                    >
                        <Menu.Item
                            name="Home"
                            active={activeItem==="Home"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="About"
                            active={activeItem==="About"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="Contact"
                            active={activeItem==="Contact"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        <Menu.Item
                            name="Projects"
                            active={activeItem==="Projects"}
                            onClick={this.handleItemClick}
                            style={textStyle}
                        />
                        {/* <Link className="item" href="/">
                            Home
                        </Link> */}
                        {/* <Link className="item" href="/About">
                            About
                        </Link>
                        <Link className="item" href="/Contact">
                            Contact
                        </Link>
                        <Link className="item" href="/Projects">
                            Projects
                        </Link> */}
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    router: state.router 
});
const mapDispatchToProps = (dispatch) => {
    return {
        onMenuClick: (ref) => {
            dispatch(push(ref));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
// Exports our bootstrap style bar for use in the router

