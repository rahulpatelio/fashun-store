import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInandSignUp from './pages/sign-in-and-signup/SignInandSignUp';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInandSignUp} />
      </Switch>
    </div>
  );
}

export default App;
