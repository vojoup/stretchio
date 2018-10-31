import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Spinner from './components/spinner/spinner';
import Dashboard from './components/dashboard/dashboard';
import ExcerciseDetail from './components/excercise-detail/excercise-detail';
const Header = lazy(() => import('./components/header/header'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/:name" component={ExcerciseDetail} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
