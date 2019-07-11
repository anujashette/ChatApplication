import React, { Component } from 'react'
import Login from '../components/LoginForm'

export class LoginPage extends Component {
    render() {
        return (
            <div>
                <Login props={this.props}/>
            </div>
        )
    }
}

export default LoginPage
