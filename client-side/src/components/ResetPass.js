import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator, } from 'react-material-ui-form-validator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { resetPass } from '../services/UserServices'


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
    class ResetPass extends React.Component {

        state = {
            password: '',
        }
        handleChange = (event) => {
            const password = event.target.value;
            this.setState({ password: password });
        }

        handleSubmit = () => {
            // your submit logic
        }
        handleForget = event => {
            event.preventDefault();

            if (!this.state.password) {
                alert('Password should not empty')
            }else if( this.state.password.length<6){
                alert('Password is too short. Atleast 6 charachters')
            }
            else {
                let input = {
                    password: this.state.password,
                    
                }
                    resetPass(input,this.props.match.params.token)
                    .then(response =>{
                        console.log('response', response)
                        alert("Password reset Successfully")
                        this.props.history.push('/')
                    })
                    .catch((errorMessages =>{
                    alert("email or password incorrect OR Verfiy your email"); 
                    }))
            }
        }

        handleBar = () => {
            this.props.history.push('/')
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
                            <Button variant="contained" onClick={this.handleBar} color="primary" className={classes.button} >
                                Login
                            </Button>

                        </Toolbar>
                    </AppBar>
                    <Typography variant="h6" className={classes.title}>
                        Reset password
                        </Typography>
                        <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    className={classes.textField}
                    errorMessages={['this field is required']}
                />      

                    <br />
                    <Button variant="contained" color="primary" onClick={this.handleForget} className={classes.button} >
                        Submit
                           </Button>
                </ValidatorForm>
                </center>
            );
        }
    }
)