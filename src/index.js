import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Scroll from './pages/Scroll'
import Footer from './components/Footer/Footer'
import App from './pages/App'
import About from './pages/About'
import Blog from './pages/Blog'
import Seminar from './pages/Seminars'
import Contact from './pages/Contact'
import Major from './components/Courses/Major'
import Magazine from './components/News/Magazine'
import Error from './pages/Error'

ReactDOM.render(
  <Router>
    <Scroll />
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/seminar'>
        <Seminar />
      </Route>
      <Route exact path='/news'>
        <Blog />
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/seminar/:Tittle' children={<Major />}></Route>
      <Route exact path='/news/:Tittle' children={<Magazine />}></Route>
      <Route exact path='*'>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)
