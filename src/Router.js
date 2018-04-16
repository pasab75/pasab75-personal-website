import React, {Component} from "react";
import {Fragment} from "redux-little-router";
import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import {routerForBrowser} from "redux-little-router";
import NavigationBarSematic from "./Components/NavigationBar/NavigationBarSematic";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import BannerImage from "./Components/BannerImage/BannerImage";

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

const {reducer, middleware, enhancer} = routerForBrowser({
    // The configured routes. Required.
    routes
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
    combineReducers({router: reducer}),
    initialState,
    composeEnhancers(enhancer, applyMiddleware(middleware))
);

export class Router extends Component {
    render() {
        return (
            <div id="Router">
                <header>
                    {/* <NavigationBar props={this.props} /> */}
                    <NavigationBarSematic props={this.props} />
                    <BannerImage />
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
