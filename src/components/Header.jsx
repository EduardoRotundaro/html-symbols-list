import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <header>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Downloads</Link></li>
                <li><Link to="/">More</Link></li>
                <li><Link to="/">Nice staff</Link></li>
            </ul>
        </nav>
    </header>
);