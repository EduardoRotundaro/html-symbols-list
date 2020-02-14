import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <header>
        <nav className="navbar">
            <ul>
                <li><Link to="/arrows">Arrows</Link></li>
                <li><Link to="/block">Block</Link></li>
                <li><Link to="/box">Box</Link></li>
                <li><Link to="/currency">Currency</Link></li>
                <li><Link to="/geometric">Geometric</Link></li>
                <li><Link to="/math">Math</Link></li>
                <li><Link to="/misc">Misc</Link></li>
                <li><Link to="/smileys-people">Smileys/People</Link></li>
                <li><Link to="/animals-nature">Animals/Nature</Link></li>
                <li><Link to="/food-drink">Food/Drink</Link></li>
                <li><Link to="/activity">Activity</Link></li>
                <li><Link to="/travel-places">Travel/Places</Link></li>
                <li><Link to="/objects">Objects</Link></li>
                <li><Link to="/symbols">Symbols</Link></li>
                <li><Link to="/flags">Flags</Link></li>
            </ul>
        </nav>
    </header>
);