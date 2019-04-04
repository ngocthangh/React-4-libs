import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          {this.showPages()}
        </div>

      </Router>

    );
  }
  showPages() {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ))
  }
}

export default App;
