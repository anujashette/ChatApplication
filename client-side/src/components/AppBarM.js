import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation'
import './form.css'

  class AppBarM extends React.Component {
    render() {
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton> */}

              <Typography variant="h6" className="title">
                Chat Application
            </Typography>
            <Navigation/>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }

export default AppBarM