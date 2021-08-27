import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import MainPage from './pages/Main';

function Photo() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddPage} />
            <Route path={`${match.url}/:photoId`} component={EditPage} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;
