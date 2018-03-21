import React from "react";
import ReactDOM from "react-dom";
import { Router, Store } from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={Store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
