import React , {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppBarM from './components/AppBarM'


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component={AppBarM}></Route>
        <Switch>
          <Route path="/Login" component={LoginForm}></Route>
          <Route path="/register" component={SignupForm}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App

