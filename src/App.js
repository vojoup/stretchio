import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Spinner from './components/spinner/spinner';
import Dashboard from './components/dashboard/dashboard';
const Header = lazy(() => import('./components/header/header'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Header />
        <Dashboard />
      </Suspense>
    );
  }
}

export default App;
