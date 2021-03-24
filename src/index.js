import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import AboutVITSection from './Components/AboutVITSection/AboutVITSection';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutVITSection} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

reportWebVitals();
