import React from 'react';
import { NavLink } from 'react-router-dom'

function Header({ handleLogout, user }) {
    return (
        <div className="Header">
            <div className='header_container'>
                <h1 className="SiteName">Money Mavericks</h1>
            </div>
            <div className="links">
                <NavLink className="navLink" to="/">Home</NavLink>
                {user.id ? <><NavLink className="navLink" to="/Stocks">Stocks</NavLink>
                <NavLink className="navLink" to="/Crypto">Crypto</NavLink>
                <NavLink className="navLink" to="/MarketRelatedNews">Market Related News</NavLink>
                <NavLink className="navLink" to="/FinancialTerms">Financial Terms</NavLink>
                <NavLink className="navLink" to="/DiscussionBoard">Discussion</NavLink></> : null}
                {!user.id ? <><NavLink className="navLink" to="/Login">Log In</NavLink>
                <NavLink className="navLink" to="/Signup">Sign Up</NavLink></>: null}
                {user.id ? <button className='logout_button' onClick={handleLogout}>Log Out</button> : null}
            </div>
        </div>
    )
}

export default Header;