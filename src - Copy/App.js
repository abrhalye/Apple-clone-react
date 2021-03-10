import React from 'react';
import './App.css';

import Nav from './Components/Main/Nav';
import Footer from './Components/Footer/Footer';
import Section from './Components/Section/Section';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';
import Youtube from './Components/Youtube/Youtube';

import { BrowserRouter as Router, Route, NavLink,Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Mac from "./Components/Main/Mac"
import page404 from './Components/Main/Page404'
import Iphone from './Components/Main/Iphone'





function App() {
  return (
    <Router>
      <div>
        
          <Nav />
        
        <Route path="/" exact component={Section} />
        <Route path="/" exact component={Section1} />
        <Route path="/" exact component={Section2} />
        <Route path="/" exact component={Section3} />
        <Route path="/" exact component={Section4} />
        <Route path="/" exact component={Section5} />
       
        {/* <Route path="/" exact component={Youtube} /> */}
        
       <Switch>
          <Route path="/" exact component={Section6} />
          <Route path="/Mac" exact component={Mac} />
          <Route path="/Iphone" exact component={Iphone} />
          <Route path="/"  component={page404} />
        </Switch>
       
        <Footer />

      </div>
    </Router>
  )
}

export default App
