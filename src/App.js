import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Spinner from './components/spinner/spinner';
const Header = lazy(() => import('./components/header/header'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>
    );
  }
}

export default App;
