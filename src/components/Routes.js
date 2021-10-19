import React from "react";

// React Router
import { HashRouter as Route, Switch, Redirect } from 'react-router-dom';

// Importing Components
import Home from '../pages/Home'
import Search from '../pages/Search'
import SearchHistory from "../pages/SearchHistory";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>{<Redirect to="/Home" />}</Route>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Search' component={Search} />
            <Route exact path='/SearchHistory' component={SearchHistory} />
        </Switch>
    );
}

export default Routes;