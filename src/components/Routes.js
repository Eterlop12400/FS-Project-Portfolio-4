import React from "react";

// React Router
import { Route, Switch } from 'react-router-dom';

// React Components
import Home from '../pages/Home'
import Search from '../pages/Search'
import Search_History from "../pages/Search_History";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Search' component={Search} />
            <Route exact path='/Search_History' component={Search_History} />
        </Switch>
    );
}

export default Routes;