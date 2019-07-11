import React, { Component } from 'react'
import Sign from '../components/SignupForm'

export class SignupPage extends Component {
    render() {
        return (
            <div>
                <Sign props={this.props}/>
            </div>
        )
    }
}

export default SignupPage
