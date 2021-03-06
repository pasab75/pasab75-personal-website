import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { push } from "redux-little-router"
import { Menu } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { withProps } from "recompose"

const textStyle = {
    color: "white",
}
const myColor = "#009688"

class NavigationBar extends Component {
    static propTypes = {
        onMenuClick: PropTypes.func,
    }

    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        name = name === "Home" ? "/" : name
        this.props.onMenuClick(name)
    }

    NavItem = withProps({
        onClick: this.handleItemClick,
        style: textStyle,
    })(Menu.Item)

    render() {
        const { activeItem } = this.state
        return (
            <div id="NavigationBar">
                <Menu
                    secondary
                    style={{
                        backgroundColor: myColor,
                        color: "white",
                        borderRadius: "0px",
                    }}
                >
                    <Menu.Menu position="right">
                        <this.NavItem
                            name="Home"
                            active={activeItem === "Home"}
                        />
                        <this.NavItem
                            name="About"
                            active={activeItem === "About"}
                        />
                        <this.NavItem
                            name="Contact"
                            active={activeItem === "Contact"}
                        />
                        {/* <this.NavItem
                            name="Projects"
                            active={activeItem === "Projects"}
                        /> */}
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    router: state.router,
})
const mapDispatchToProps = dispatch => ({
    onMenuClick: ref => dispatch(push(ref)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar)
// Exports our bootstrap style bar for use in the router
