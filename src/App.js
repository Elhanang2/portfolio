import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import {Container} from "mdbreact"
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
class App extends Component {
  render() {
    return (
      <div className="app">
     
        <Router>
          <div>
      
            <NavbarPage />
            
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Footer />
        
          </div>
          
        </Router>
        
      </div>
    );
  }
}

export default App;
