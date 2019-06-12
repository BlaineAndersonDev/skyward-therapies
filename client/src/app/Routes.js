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
      <Router history={history}>
        <div id="routesContainer">

          <div id="routesNavigation">
            <Navigation />
          </div>

          <div id="routesBody">
           <Route path="/" render={(props) =>
             <App
               {...props}
             />}
           />
         </div>

                  <div id="routesFooter">
                    <Footer />
                  </div>

        </div>
      </Router>
    );
  }
}

export default Routes;
