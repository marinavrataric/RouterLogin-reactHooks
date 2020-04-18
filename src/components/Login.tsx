import React, { useContext, useState } from 'react'
import { LoginUserContext } from './LoginUserContext'
import { useHistory } from 'react-router-dom'

function Login() {

    const { user, setUser } = useContext(LoginUserContext)

    const handleUsername = (e: any) => setUser({ ...user, username: e.target.value })
    const handleEmail = (e: any) => setUser({ ...user, email: e.target.value })
    const handlePassword = (e: any) => setUser({ ...user, password: e.target.value })

    const [state, setstate] = useState({usernameError: '', emailError: '', passwordError: ''})
    
    const history = useHistory()

    const handleLogin = () => {
        let usernameError = ''
        let emailError = ''
        let passwordError = ''

        if (user.username === '') usernameError = 'Field cannot be empty'
        if (!user.email.includes('@')) emailError = 'Invalid email'
        if (user.password.length < 4) passwordError = 'Use at least 5 characters'

        if(usernameError || emailError || passwordError) {
            setstate({usernameError, emailError, passwordError})
            return false
        }
        setUser({ ...user, isLogin: true })
        history.goBack()
        return true
    }

    return (
        <div>
            <h1 className="title">Login</h1>
            <div className="form">
                <input type="text" placeholder="username" onChange={handleUsername} value={user.username} />
                <p>{state.usernameError}</p>
                <input type="text" placeholder="email" onChange={handleEmail} value={user.email} />
                <p>{state.emailError}</p>
                <input type="password" placeholder="password" onChange={handlePassword} value={user.password} />
                <p>{state.passwordError}</p>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login