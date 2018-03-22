import React, { Component } from "react";
import { Fragment } from "redux-little-router";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { routerForBrowser } from "redux-little-router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const initialState = {};
const routes = {
    "/": {
        title: "Home"
    },
    "/About": {
        title: "About"
    },
    "/Contact": {
        title: "Contact"
    },
    "/Projects": {
        title: "Projects"
    }
};

const { reducer, middleware, enhancer } = routerForBrowser({
    // The configured routes. Required.
    routes
});

export const Store = createStore(
    combineReducers({ router: reducer }),
    initialState,
    compose(enhancer, applyMiddleware(middleware))
);

export class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="Router">
                <header>
                    <NavigationBar props={this.props} />
                </header>
                <Fragment forRoute="/">
                    <div>
                        <Home />
                        <About />
                        <Projects />
                        <Contact />
                    </div>
                </Fragment>
            </div>
        );
    }
}
