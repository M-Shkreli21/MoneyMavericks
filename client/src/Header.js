import React from 'react';
import { NavLink } from 'react-router-dom'
import ALFLogo from './ALF_Logo.png';

function Header({handleLogout}) {
    return(
        <div className="Header">
            <div className='header_container'>
            <img className="logo" src={ALFLogo}></img>
            <h1 className="SiteName">Alpha Level Finance</h1>
            </div>
        <div>
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/Stocks">Stocks</NavLink>
            <NavLink className="navLink" to="/Crypto">Crypto</NavLink>
            <NavLink className="navLink" to="/MarketRelatedNews">Market Related News</NavLink>
            <NavLink className="navLink" to="/FinancialTerms">Financial Terms</NavLink>
            <NavLink className="navLink" to="/DiscussionBoard">Discussion</NavLink>
            <NavLink className="navLink" to="/Login">Log In</NavLink>
            <NavLink className="navLink" to="/Signup">Sign Up</NavLink>
            <button className='logout_button' onClick={handleLogout}>Log Out</button>
        </div>
        </div>
    )
}

export default Header;