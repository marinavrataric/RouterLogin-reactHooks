import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinkRouter() {
    return (
        <div className="navBar">
            <ul>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/" exact>Home Page</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/contacts" >User Contacts</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/posts" >Posts</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/aboutme" >About Me</NavLink></li>
            </ul>
            <NavLink strict to="/login"><button className="btnLogin">Login</button></NavLink>
        </div>
    )
}

export default NavLinkRouter