import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../HomePage'
import UserContact from '../UserContact'
import UserPosts from '../UserPosts'
import AboutMe from '../AboutMe'
import { LoginUserContext } from '../LoginUserContext'
import Login from '../Login'

function SwitchRouter() {

    const { user } = useContext(LoginUserContext)

    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contacts" render={() => (user.isLogin ? <UserContact /> : <Redirect to="/" />)} />
            <Route path="/posts" render={() => (user.isLogin ? <UserPosts /> : <Redirect to="/" />)} />
            <Route path="/aboutme" render={() => (user.isLogin ? <AboutMe /> : <Redirect to="/" />)} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default SwitchRouter