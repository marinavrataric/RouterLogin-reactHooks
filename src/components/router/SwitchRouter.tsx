import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import UserContact from '../UserContact'
import UserPosts from '../UserPosts'
import AboutMe from '../AboutMe'
import Login from '../Login'

function SwitchRouter() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contacts" component={UserContact} />
            <Route path="/posts" component={UserPosts} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default SwitchRouter