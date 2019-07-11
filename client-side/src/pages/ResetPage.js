import React, { Component } from 'react'
import Reset from '../components/ResetPass'

export class ResetPage extends Component {
    render() {
        return (
            <div>
                <Reset props={this.props}/>
            </div>
        )
    }
}

export default ResetPage
