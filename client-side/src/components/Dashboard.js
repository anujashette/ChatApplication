import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Style.css';

export class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            onlineUser:[],
            sender:'',
            receiver:'',
            msg:'',
        }
    }

    handleChange = (event) => {
        var msg = event.target.value;
        this.setState({msg:msg});
    }

    handleSend = () => {
    }
    handleLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        this.props.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div id="main">
                    <AppBar position="static" >
                        <Toolbar>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div><Typography variant="h6" >
                                Chat Application
                        </Typography></div>
                            <div></div>
                            <div></div>
                            <div> <Button variant="contained" onClick={this.handleLogout} color="primary" type="submit">
                                Logout
                        </Button></div>
                        </Toolbar>
                    </AppBar>
                </div>

                <center><div><Typography variant="h6" >{this.state.sender}</Typography></div></center>
                        
                <div id="box">
                    <div id="listb">
                        <div id="listbar">
                            <Typography variant="h6" className="white">
                                Online
                            </Typography>
                        </div>
                        <div id="list">
                                <ul className="li">
                                    <li>ShetteAnuja</li>
                                </ul>
                        </div>
                    </div>

                    <div id="chatbox">
                        <div id="rbar">
                            <Typography variant="h6" className="white">
                            {this.state.receiver}
                            </Typography>
                        </div>
                        <div id="msgbox">
                            <div>
                                <div className="chat friend">
                                    <ul className="chat-message">
                                        <li>{this.state.msg}</li>
                                    </ul>
                                </div>

                                <div className="chat self">
                                    <ul className="chat-message">
                                        <li>{this.state.msg}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="text">
                            <div>
                                <textarea
                                    rows="3" cols="40"
                                    onChange={this.handleChange}
                                    name="Enter message"
                                    value={this.state.msg}
                                ></textarea>  </div>
                            <div>
                                <Button variant="contained" onClick={this.handleSend} color="primary" type="submit">
                                    send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard
