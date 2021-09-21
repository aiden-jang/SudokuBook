import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main/main_page_container';
import Modal from './modal/modal';
import HomeContainer from './main/home_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" component={MainPageContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
        </Switch>
    </div>
);

export default App;