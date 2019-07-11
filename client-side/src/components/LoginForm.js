import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator,} from 'react-material-ui-form-validator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Validator from 'validator'
import {login} from '../services/services'

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
        password:''
    }
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email:email });
    }
    handleChangeP = (event) => {
        const password = event.target.value;
        this.setState({ password:password });
    }
    handleSubmit = () => {
        // your submit logic
        
    }
    handleLogin = event => {
        event.preventDefault();

        if(!this.state.email){
            alert('Email should not be empty')
        }
        else if(!Validator.isEmail(this.state.email)){
            alert('Email is invalid')
        }
        else if(!this.state.password){
            alert('Password should not be empty')
        }else if( this.state.formData.password.length<6){
            alert('Password is too short. Atleast 6 charachters')
        }
        else{
            let input ={
                email : this.state.email,
                password : this.state.password,
            }
            console.log(input)
            login(input)
            .then(response =>{
                console.log('response',response)
                setTimeout(function() { alert("Login Successfully"); }, 1000);
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('email',response.data.email)
                localStorage.setItem('token',response.data.token.token)

                this.props.props.history.push('/dashboard')
            })
            .catch((response =>{
                console.log("545454545",response.status)
            alert("email or password is incorrect OR Verfiy your email"); 
            }))
        }
    }
    handleForget = () => {
        this.props.props.history.push('/forget')        
    }
    handleBar = () =>{
        this.props.props.history.push('/register')
    }

    render() {
        
        const { classes } = this.props;

        return (
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
                        <Button variant="contained"  onClick={this.handleBar} color="primary" className={classes.button} type="submit">
                          SignUp
                        </Button>

                    </Toolbar>
                </AppBar>
                <Typography variant="h6" className={classes.title}>
                        Login
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
                
                <TextValidator
                    label="Password"
                    onChange={this.handleChangeP}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    className={classes.textField}
                    errorMessages={['this field is required']}
                />      
                
                <br/>
                      <Button variant="contained" color="primary" onClick={this.handleLogin} className={classes.button} type="submit">
                          Login
                      </Button>
                      <Button variant="contained" color="primary" onClick={this.handleForget} className={classes.button} type="button">
                          Forget Password
                       </Button>
                  </ValidatorForm>
              );
          }
      }
  )