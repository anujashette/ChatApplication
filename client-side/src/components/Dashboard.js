import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Style.css';

export class Dashboard extends Component {

    handleChange = () => {
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
                            <div> <Button variant="contained" onClick={this.handleBar} color="primary" type="submit">
                                Logout
                        </Button></div>
                        </Toolbar>
                    </AppBar>
                </div>
                <div><Typography variant="h6" >
                    sender name
                        </Typography></div>
                <div id="box">
                    <div id="chat">
                        <div id="listbar">
                            <Typography variant="h6" className="white">
                                Online
                            </Typography>
                        </div>
                        <div id="list">
                            <Typography variant="h6" className="white">
                                nameList
                        </Typography>
                        </div>
                    </div>

                    <div id="chatbox">
                        <div id="rbar">
                            <Typography variant="h6" className="white">
                                Receiver name
                        </Typography>
                        </div>
                        <div id="msgbox">
                            <Typography variant="h6">
                                messageBox
                            </Typography>
                        </div>
                        <div id="text">
                            <div>
                                <textarea
                                    rows="3" cols="50"
                                    onChange={this.handleChange}
                                    name="Enter message"
                                // value={this.state.email}
                                ></textarea>  </div>
                            <div>
                                <Button variant="contained" onClick={this.handleBar} color="primary" type="submit">
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
