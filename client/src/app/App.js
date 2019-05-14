import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Construction from './pages/construction/Construction.js';
import Home from './pages/home/Home.js';
import './App.css';

class App extends Component {
  render() {
    let pathStart;
    if (process.env.NODE_ENV === 'production') {
      pathStart = 'https://skywardtherapies.com'
    } else {
      pathStart = 'https://localhost:3000'
    }

    return (
      <Router>
        <div id="appContainer">

          <div id="appBody">
            <Route exact path='/' component={Construction}/>
            <Route exact path='/home' component={Home}/>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
