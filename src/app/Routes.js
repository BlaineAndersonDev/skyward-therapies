import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './Routes.css';
import history from './auth/History.js';
// === Component Imports ===
import App from './pages/App.js';
import Footer from './footer/Footer.js'
import Navigation from './navigation/Navigation.js'

class Routes extends Component {

  goTo = async (route) => {
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
        <div id="routesContainer">
          <Router id="routesContainer" history={history}>


          <div id="routesBody">
            <Route path="/" render={(props) =>
              <App
                {...props}
              />}
            />
          </div>

          <Footer />

          </Router>
        </div>
    );
  }
}

export default Routes;
