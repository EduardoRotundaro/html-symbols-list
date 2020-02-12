import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/"></Route>
        </Switch>
        <Footer/>
    </Router>
);