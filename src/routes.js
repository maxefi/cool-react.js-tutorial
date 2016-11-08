import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CountersPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';

export default (
    <Route component={App} path='/'>
        // IndexRoute - same as index.html so it will be choosen if no route is provided
        <IndexRoute component={HelloWorldPage}/>
        <Route component={CounterPage} path='counters'/>
        <Route component={TimePage} path='time'/>
    </Route>
);
