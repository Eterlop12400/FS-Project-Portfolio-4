import React from "react";

// React Router
import { Route, Switch, Redirect } from 'react-router-dom';

// React Components
import Home from '../pages/Home'
import Search from '../pages/Search'
import SearchHistory from "../pages/SearchHistory";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}>{<Redirect to="/Home" />}</Route>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Search' component={Search} />
            <Route exact path='/SearchHistory' component={SearchHistory} />
        </Switch>
    );
}

export default Routes;