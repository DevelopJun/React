import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Registerpage/Registerpage';



// 원래 함수기반으로 써져 있는데, Class 기반으로 바꾼다. 


class App extends Component{
  render(){ 
    return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Hello React!!</h1>
      </div>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
    </Router>
    );
  }
}

export default App;
