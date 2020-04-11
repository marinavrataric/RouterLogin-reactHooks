import React from 'react'
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import UserContact from './UserContact'
import UserPosts from './UserPosts'
import AboutMe from './AboutMe'
import HomePage from './HomePage'

function NavBarRouter() {
    return (
        <Router>
            <div className="navBar">
                <ul>
                    <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/" exact>Home Page</NavLink></li>
                    <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/contacts" >User Contacts</NavLink></li>
                    <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/posts" >Posts</NavLink></li>
                    <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/aboutme" >About Me</NavLink></li>
                </ul>
                <button className="btnLogin">Login</button>
            </div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/contacts" component={UserContact} />
                <Route path="/posts" component={UserPosts} />
                <Route path="/aboutme" component={AboutMe} />
            </Switch>
        </Router>
    )
}

export default NavBarRouter