import React, { useContext } from 'react'
import { NavLink, useHistory  } from 'react-router-dom'
import { LoginUserContext } from '../LoginUserContext'

function NavLinkRouter() {

    const history = useHistory()
    const { user, setUser } = useContext(LoginUserContext)

    const handleLogin = () => {
        history.push('/Login')
        if(user.isLogin) {
            setUser({...user, isLogin: false})
            history.push('/')
        }
    }

    return (
        <div className="navBar">
            <ul>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/" exact>Home Page</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/contacts" >User Contacts</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/posts" >Posts</NavLink></li>
                <li><NavLink className="navlink" activeStyle={{ color: 'rgb(52,48,76)' }} strict to="/aboutme" >About Me</NavLink></li>
            </ul>
            <button className="btnLogin" onClick={handleLogin}>{user.isLogin ? 'Logout' : 'Login'}</button>
        </div>
    )
}

export default NavLinkRouter