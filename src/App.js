import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Spinner from '../../test/src/components/Spinner/spinner';
import Dashboard from './components/dashboard/dashboard';
import ExcerciseDetail from './components/excercise-detail/excercise-detail';
import AuthenticatedRoute from './components/autheticated-route/Authenticated-route';
import Login from './components/login/login';
const Header = lazy(() => import('./components/header/header'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    console.log('LOGIN!');
    this.setState({ isAuthenticated: true });
  }

  render() {
    const { isAuthenticated } = this.props;
    console.log(this.state.isAuthenticated);
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/login"
              render={() => <Login login={this.login} />}
            />
            <AuthenticatedRoute
              exact
              path="/:name"
              component={ExcerciseDetail}
              props={{ isAuthenticated }}
            />
            {/* <Route exact path="/:name" component={ExcerciseDetail} /> */}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
