import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator,} from 'react-material-ui-form-validator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Validator from 'validator'
import {forgetPass} from '../services/UserServices'

// import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    menuButton: {
        marginRight: 1,
      },
      button: {
        margin: 20,
      },
      title: {
       
        flexGrow: 1,
       
      },
      text: {
        marginTop: 20,
        flexGrow: 1,
       
      },
      textField: {
          marginTop:5,
        marginLeft: 1,
        marginRight: 1,
        width: 300,
      },
  });

  export default withStyles(styles) (
    class LoginForm extends React.Component {
     
        state = {
            email: '',
        }
        handleChange = (event) => {
            const email = event.target.value;
            this.setState({ email:email });
        }

        handleSubmit = () => {
            // your submit logic
            
        }
        handleForget = event => {
            event.preventDefault();
    
            if(!this.state.email){
                alert('Email should not be empty')
            }
            else if(!Validator.isEmail(this.state.email)){
                alert('Email is invalid')
            }
        
            else{
                let input ={
                    email : this.state.email,
                }
                console.log(input)
                forgetPass(input)
                .then(response =>{
                    console.log('response',response)
                   alert(  response || "Link is sent to your mail ID" )
                   this.props.props.history.push('/')
                })
                .catch((errorMessages =>{
                alert("Account not exist with this id"); 
                }))
            }
        }
      
        handleBar = () =>{
            this.props.props.history.push('/')
        }
    
        render() {
            
            const { classes } = this.props;
    
            return (
                <center>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                 <AppBar position="static">
                        <Toolbar>
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Typography variant="h6" className={classes.title}>
                                Chat Application
                            </Typography>
                            <Button variant="contained"  onClick={this.handleBar} color="primary" className={classes.button} >
                              Login
                            </Button>
    
                        </Toolbar>
                    </AppBar>
                    <Typography variant="h6" className={classes.title}>
                            Forget password
                        </Typography>
                    <TextValidator
    
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                        className={classes.textField}
                        type = "email"
                        margin="normal"
                    />
                    <br/>
                          <Button variant="contained" color="primary" onClick={this.handleForget} className={classes.button} >
                              Submit
                           </Button>
                      </ValidatorForm>
                      </center>
                  );
              }
          }
      )