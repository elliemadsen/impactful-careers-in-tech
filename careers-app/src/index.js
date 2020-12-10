import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alumni from './Alumni';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Router>
        <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/Alumni" component={Alumni}/>
        </Switch>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
