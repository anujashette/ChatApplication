import React, { Component } from 'react'
import Dash from '../components/Dashboard'
export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Dash props={this.props}/>
            </div>
        )
    }
}

export default Dashboard
