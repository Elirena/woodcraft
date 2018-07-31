import React, { Component } from 'react';
import Homepage from "../Homepage/Homepage";
import Aboutpage from "../Aboutpage/Aboutpage";
import Calcpage from "../Calcpage/Calcpage";
import TopMenu from "../../components/TopMenu/TopMenu";
import Footer from "../../components/Footer/Footer";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import './_media.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
              <div>
                  <TopMenu/>
                  <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/about" component={Aboutpage}/>
                    <Route path="/calculator" component={Calcpage}/>
                  </Switch>
                  <Footer/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
