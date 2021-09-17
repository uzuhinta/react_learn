import SignIn from 'features/Auth/pages/SignIn';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import firebase from 'firebase';

const Photo = React.lazy(() => import('./features/Photo'));

const config = {
  apiKey: 'AIzaSyDRFHvdN_wovAcDb-3q17EPfsCnq2xgkmI',
  authDomain: 'photo-app-6c5a0.firebaseapp.com',
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          // do something user logs out
          return;
        }
        console.log('user login', user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="photos" />
            <Route path="/photos" component={Photo} />
            <Route path="/signin" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
