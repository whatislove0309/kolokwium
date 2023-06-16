import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MKnavbar = () => {

    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" activeClassName='active'>
                    <Link class="nav-link" to="/">Posts</Link>
                </li>
                <li class="nav-item" activeClassName='active'>
                    <Link class="nav-link" to="/home">Home</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default MKnavbar;