import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavLinkRouter from './NavLinkRouter'
import SwitchRouter from './SwitchRouter'

function NavigationBar() {

    return (
        <div>
            <Router>
                <NavLinkRouter />
                <SwitchRouter />
            </Router>
        </div>
    )
}

export default NavigationBar