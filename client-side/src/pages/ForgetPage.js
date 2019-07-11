import React, { Component } from 'react'
import Forget from '../components/ForgetPass'

export class ForgetPage extends Component {
    render() {
        return (
            <div>
                <Forget props={this.props}/>
            </div>
        )
    }
}

export default ForgetPage
