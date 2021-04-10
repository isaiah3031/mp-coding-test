import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './reset.css'
import './index.css';
import App from './App';
import NavBar from './components/navBar/navBar'
import reportWebVitals from './reportWebVitals';
import ItemList from './components/lists/item-list'
import StartupPage from './components/pages/startup_page'
import CoursesPage from './components/pages/courses_page'
import StartupLearnPage from './components/pages/startup_learn_page'
import CourseLearnPage from './components/pages/course_learn_page'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Route path='/startups/learn'><StartupLearnPage /></Route>
      <Route exact path='/courses/learn'><CourseLearnPage /></Route>
      <Route exact path='/startups'><StartupPage /></Route>
      <Route exact path='/courses'><CoursesPage /></Route>

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
