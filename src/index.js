import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Scroll from './pages/Scroll'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/Footer'
import App from './pages/App'
import About from './pages/About'

ReactDOM.render(
  <Router>
    <Scroll />
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/*'>
        <App />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)
