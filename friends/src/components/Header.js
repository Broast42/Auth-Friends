import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1>Friends</h1>
            <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/friends">Friends List</NavLink>
            </nav>
        </header>
    );
};

export default Header;