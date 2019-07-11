import React , {Component} from 'react';
import './App.css';
import LoginForm from './pages/LoginPage';
import SignupForm from './pages/SignupPage';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ForgetPage from './pages/ForgetPage';
import ResetPass from './components/ResetPass';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component={LoginForm} exact></Route>
        <Switch>
          <Route path="/register" component={SignupForm}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/forget" component={ForgetPage}></Route>
          <Route path="/reset" component={ResetPass}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App
