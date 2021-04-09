import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/navBar/navBar'
import './reset.css'
import reportWebVitals from './reportWebVitals';
import ItemList from './components/lists/item-list'
import StartupPage from './components/pages/startup_page'
import CoursesPage from './components/pages/courses_page'
import { Route, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Route path='/startups'><StartupPage /></Route>
      <Route path='/courses'><CoursesPage /></Route>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
