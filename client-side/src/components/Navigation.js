import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import '../App.css'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/Login" className="anuja">Login</NavLink> 
                <NavLink to="/register" className="link">Register</NavLink>
            </div>
        )
    }
}

export default Navigation
