import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ourteam from './components/pages/Ourteam';
import Courses from './components/pages/Courses';
import Colleges from './components/pages/Colleges';
import Webinar from './components/pages/Webinar';
import NotFound from './components/pages/NotFound';
import Exams from './components/pages/Exams';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/ourteam" component={Ourteam} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/colleges" component={Colleges} />
            <Route exact path="/webinar" component={Webinar} />
            <Route exact path="/exams" component={Exams} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
