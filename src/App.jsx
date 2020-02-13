import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <List/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
);