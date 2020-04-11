import React, { useState } from 'react'
import NavigationBar from './router/NavigationBar'

function Login() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {isOpen ? <NavigationBar /> : (
                <div>
                    <h1 className="title">Login</h1>
                    <button onClick={() => setIsOpen(true)}>Back</button>
                </div>
            )}
        </div>
    )
}

export default Login