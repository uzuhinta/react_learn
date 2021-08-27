import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="photos" />
                        <Route path="/photos" component={Photo} />
                        {/* <Route path="/user" component={User} />*/}
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
