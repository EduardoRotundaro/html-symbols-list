import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import {
    ARROWS,
    BLOCK,
    BOX,
    CURRENCY,
    GEOMETRIC,
    MATH,
    MISC,
} from './constants';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <List/>
            </Route>
            <Route path="/arrows">
                <List itens={ARROWS}/>
            </Route>
            <Route path="/block">
                <List itens={BLOCK}/>
            </Route>
            <Route path="/box">
                <List itens={BOX}/>
            </Route>
            <Route path="/currency">
                <List itens={CURRENCY}/>
            </Route>
            <Route path="/geometric">
                <List itens={GEOMETRIC}/>
            </Route>
            <Route path="/math">
                <List itens={MATH}/>
            </Route>
            <Route path="/misc">
                <List itens={MISC}/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route> 
        </Switch>
        <Footer/>
    </Router>
);