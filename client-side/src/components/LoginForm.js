import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator,} from 'react-material-ui-form-validator';
import AppBar from '../components/AppBarM';


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
        marginTop:20,
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
    handleSignup = () => {
        // your submit logic
        
    }
    handleLogin()
{    this.props.history.push('/dashboard')
} 
    render() {
        
        const { classes } = this.props;

        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
        {/* <AppBar/> */}
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
                      <Button variant="contained" color="primary" className={classes.button} type="submit">
                          Login
                      </Button>
                      <Button variant="contained" color="primary" className={classes.button}  type="button">
                          Forget Password
                       </Button>
                  </ValidatorForm>

              );
          }
      }
  )