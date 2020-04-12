import React, { useState } from 'react'
import NavigationBar from './router/NavigationBar'
import { LoginUserContext } from './LoginUserContext'

interface User {
    username: string,
    email: string,
    password: string,
    isLogin: boolean
}

function App() {

    const [user, setUser] = useState<User>({ username: '', email: '', password: '', isLogin: false })

    return (
        <div>
            <LoginUserContext.Provider value={{ user, setUser }}>
                <NavigationBar />
            </LoginUserContext.Provider>
        </div>
    )
}

export default App
