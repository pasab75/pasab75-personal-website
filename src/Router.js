import React, { Component } from "react";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import {
    routerForBrowser,
    Provider,
    RouterProvider
} from "redux-little-router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
const initialState = {};

const routes = {
    "/About": {
        title: "About"
    },
    "/Contact": {
        title: "Contact"
    },
    "/Projects": {
        title: "Projects"
    },
    "/": {
        title: "Home"
    }
};

const { reducer, middleware, enhancer } = routerForBrowser({
    // The configured routes. Required.
    routes,
    // The basename for all routes. Optional.
    basename: "/"
});

const clientOnlyStore = createStore(
    combineReducers({ router: reducer }),
    initialState,
    compose(enhancer, applyMiddleware(middleware))
);

export default class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={clientOnlyStore}>
                <RouterProvider store={clientOnlyStore}>
                    <NavigationBar />
                </RouterProvider>
            </Provider>
        );
    }
}
