import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Login from './Login'
import Home from './Home';
import Payment from './Payment'
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HgRzCJ6q1f9ZSCSdVgP03DUoxTI42OpLAL6IyFcBhLPzEKF907F6ipHaYlhECNKU6F4OZr4Tw6iwroGZPufb7yo00IxzqLuUM')

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>,', authUser)
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else {
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
