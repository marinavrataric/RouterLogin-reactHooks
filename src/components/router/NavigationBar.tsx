import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../Login'
import NavLinkRouter from './NavLinkRouter'
import SwitchRouter from './SwitchRouter'

function NavigationBar() {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {isOpen ? <Login /> :
                <Router>
                    <NavLinkRouter />
                    <button className="btnLogin" onClick={() => setIsOpen(true)}>Login</button>
                    <SwitchRouter />
                </Router>}
        </div>
    )
}

export default NavigationBar