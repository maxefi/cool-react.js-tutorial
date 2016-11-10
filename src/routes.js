import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isUserSignedIn } from 'redux/models/user';
import App from 'components/App';
import CounterPage from 'components/CountersPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';

function requireAuth(nextState, transition, cb) {
    setTimeout(() => {
        if (!isUserSignedIn(store.getState())) {
            transition('/');
        }

        cb();
    }, 0);
}

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route component={App} path='/'>
            // IndexRoute - same as index.html so it will be choosen if no route is provided
            <IndexRoute component={HelloWorldPage}/>
            <Route component={CounterPage} path='counters'/>
            <Route component={TimePage} path='time' onEnter={requireAuth}/>
        </Route>
    );
}
