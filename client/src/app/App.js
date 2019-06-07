import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import history from './pages/auth/History.js';
// === Component Imports ===
import Home from './pages/Home.js';

class App extends Component {

  goTo = async (route) => {
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
      <Router history={history}>
        <div id="routesContainer">

           <Route exact path="/" render={(props) =>
             <Home
               {...props}
             />}
           />


        </div>
      </Router>
    );
  }
}

export default App;
