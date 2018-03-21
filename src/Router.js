import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { initializeCurrentLocation } from 'redux-little-router';

const routes = {
    '/About': {
        title: 'About'
    },
    '/Contact': {
        title: 'Contact'
    },
    '/Projects': {
        title: 'Projects'
    },
    // You can also define nested route objects!
    // Just make sure each route key starts with a slash.
    '/': {
    title: 'Home'
    }
};

const { reducer, middleware, enhancer } = routerForBrowser({
    // The configured routes. Required.
    routes,
    // The basename for all routes. Optional.
    basename: '/'
});

const clientOnlyStore = createStore(
    combineReducers({ router: reducer, yourReducer }),
    initialState,
    compose(enhancer, applyMiddleware(middleware))
);

export default class Router extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <BrowserRouter>
                <Route></Route>
            </BrowserRouter>
        )
    }
}