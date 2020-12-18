import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Index from './components/containers/Index';
import ListData from './components/containers/ListData';
import Login from './components/containers/Login';
import Header from './components/containers/Header';
import Menu from './components/containers/Menu';
import ProfileSettings from './components/containers/ProfileSettings';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "./components/containers/FormData";
import {Route} from 'react-router-dom';

const App = ({history}) => {
        return (
            <ConnectedRouter history={history}>
                <Route path="/" component={Header}/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Index}/>
                <Route exact path="/list/users" component={ListData}/>
                <Route exact path="/list/categories" component={ListData}/>
                <Route exact path="/list/offers" component={ListData}/>
                <Route exact path="/list/users/:userId/reviews" component={ListData}/>
                <Route exact path="/list/offers/:offerId/trades" component={ListData}/>
                <Route exact path="/list/lists" component={ListData}/>
                <Route exact path="/data/:do/:data/" component={FormData}/>
                <Route exact path="/data/:do/:data/:id" component={FormData}/>
                <Route exact path="/profile/settings/" component={ProfileSettings}/>
                <Route path="/" component={Menu}/>
            </ConnectedRouter>
            )
};

export default App;
