import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Page2 from "../containers/Page2/Page2";
import Page1 from "../containers/Page1/Page1";
import Edit from "../containers/Edit/Edit";

export default () => (
	<Switch>
		<Route path="/page1" component={Page1}/>
		<Route path="/page2" component={Page2}/>
        <Route path="/person/:id" component={Edit}/>
        <Redirect from="/" to="/page1"/>
	</Switch>
);
