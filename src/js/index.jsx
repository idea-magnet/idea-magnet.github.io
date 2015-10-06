import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

import App from "./containers/App";
import HomePage from "./containers/HomePage";
import NoMatchPage from "./containers/NoMatchPage";

import $ from "jquery";
require("bootstrap");
import { solveBrowserCompat } from "./BrowserCompat";

$(function() {
    solveBrowserCompat();
    React.render(
        <Router history={ createBrowserHistory() }>
            <Route path="/" component={ App } >
                <IndexRoute component={ HomePage } />
                <Route path="/*" component={ NoMatchPage } />
            </Route>
        </Router>, document.getElementById("react-app"));
});
