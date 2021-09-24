import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <NavLink to="/likes">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            </NavLink>
            <NavLink to="/">
                <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="Logo" className="header__logo  "/>
            </NavLink>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
