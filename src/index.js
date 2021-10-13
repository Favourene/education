import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/Footer'
import App from './pages/App'
import About from './pages/About'

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path='/'>
      <App />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Footer />
  </Router>,
  document.getElementById('root')
)
