import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import 'styles';
import Homepage from 'components/homepage/homepage';
import About from 'components/about/about';

ReactDOM.render(
  <Router>
    <div>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active" exact>About</NavLink>
        </li>
      </ul>
      <Route path='/' component={Homepage} exact />
      <Route path='/about' component={About} />
    </div>
  </Router>
  ,
  document.getElementById('app')
);
