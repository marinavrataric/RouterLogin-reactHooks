import React, { useContext } from 'react'
import { LoginUserContext } from './LoginUserContext'
import { useHistory } from 'react-router-dom'

function Login() {

    const { user, setUser } = useContext(LoginUserContext)

    const history = useHistory()

    const handleLogin = () => {
        setUser({ ...user, isLogin: true })
        history.goBack()
    }

    return (
        <div>
            <h1 className="title">Login</h1>
            <div className="form">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login