import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

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
    SMILEYS_PEOPLE,
    ANIMALS_NATURE,
    FOOD_DRINK,
    ACTIVITY,
    TRAVEL_PLACES,
    OBJECTS,
    SYMBOLS,
    FLAGS,
} from './constants';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/"><Redirect to="/arrows"/></Route>
            <Route path="/arrows"><List itens={ARROWS}/></Route>
            <Route path="/block"><List itens={BLOCK}/></Route>
            <Route path="/box"><List itens={BOX}/></Route>
            <Route path="/currency"><List itens={CURRENCY}/></Route>
            <Route path="/geometric"><List itens={GEOMETRIC}/></Route>
            <Route path="/math"><List itens={MATH}/></Route>
            <Route path="/misc"><List itens={MISC}/></Route>
            <Route path="/smileys-people"><List itens={SMILEYS_PEOPLE}/></Route>
            <Route path="/animals-nature"><List itens={ANIMALS_NATURE}/></Route>
            <Route path="/food-drink"><List itens={FOOD_DRINK}/></Route>
            <Route path="/activity"><List itens={ACTIVITY}/></Route>
            <Route path="/travel-places"><List itens={TRAVEL_PLACES}/></Route>
            <Route path="/objects"><List itens={OBJECTS}/></Route>
            <Route path="/symbols"><List itens={SYMBOLS}/></Route>
            <Route path="/flags"><List itens={FLAGS}/></Route>
            <Route path="*"><NotFound/>
            </Route> 
        </Switch>
        <Footer/>
    </Router>
);