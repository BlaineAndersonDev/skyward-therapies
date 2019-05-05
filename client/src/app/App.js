import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/about/About.js';
import Nav from './pages/Nav.js';
import Footer from './pages/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="appContainer">

          <div id="appNavigation">
            <Nav />
          </div>

          <div id="appBody">
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
          </div>

          <div id="appFooter">
            <Footer />
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
