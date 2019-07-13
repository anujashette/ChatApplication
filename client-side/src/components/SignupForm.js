import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import {register} from '../services/UserServices';
import Validator from 'validator'

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
        marginTop: 5,
        marginLeft: 1,
        marginRight: 1,
        width: 300,
    },
});

export default withStyles(styles)(
    class SignupFrom extends React.Component {
        state = {
            formData: {
                email: '',
                username: '',
                password: '',
                
            },
            submitted: false,
        }

        handleChange = (event) => {
            const { formData } = this.state;
            formData[event.target.name] = event.target.value;
            this.setState({ formData });
        }

        handleSubmit = event => {
            event.preventDefault();

            if(! this.state.formData.email){
                console.log('email should not be empty')
            }else if(!Validator.isEmail( this.state.formData.email)){
                console.log('Email is invalid')
            }
            else if(! this.state.formData.username){
                console.log('username should not be empty')
            }
            else if(! this.state.formData.password){
                console.log('Password should not be empty')
            }
            else if( this.state.formData.password.length<6){
                alert('Password is too short. Atleast 6 charachters')
            }
            else{
                let input = {
                    email : this.state.formData.email,
                    username : this.state.formData.username,
                    password : this.state.formData.password
                }
                register(input)
                .then((response)=>{
                    console.log(response.data)
                    alert(response.data+' Please verify your email')
                }).catch((errorMessages)=>{
                    alert(  ' Already have an account of '+this.state.formData.email);
                })
                this.setState({ submitted: true }, () => {
                    setTimeout(() => this.setState({ submitted: false }), 1000);
                });
            }
        }

        handleBar = () =>{
            this.props.props.history.push('/')
        }

        render() {
            const { formData, submitted } = this.state;
            const { classes } = this.props;

            return (
            <center>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}>

                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Chat Application
                            </Typography>
                            <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.handleBar}>
                                Login
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <Typography variant="h6" className={classes.title}>
                        Signup
                    </Typography>
                 
                    <br />
                    <TextValidator
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={formData.email}
                        className={classes.textField}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                 <br />
                    <TextField
                        label="Username"
                        onChange={this.handleChange}
                        name="username"
                        value={formData.username}
                        className={classes.textField}
                    >

                    </TextField>
                    <br />
                    <TextValidator
                        label="Password"
                        onChange={this.handleChange}
                        name="password"
                        value={formData.password}
                        validators={['required']}
                        className={classes.textField}
                        errorMessages={['this field is required']}
                    />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        className={classes.button}
                        disabled={submitted}
                    >
                        {
                            (submitted && 'Your account is created successfully!')
                            || (!submitted && 'Signup')
                        }
                    </Button>
                </ValidatorForm>
                </center>
            );
        }
    })