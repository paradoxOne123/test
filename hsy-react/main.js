import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'
import { browserHistory } from 'react-router'

import Head from './components/head.jsx';
import Banner from './components/banner.jsx';
import Notice from './components/Notice.jsx';
import MainZone from './components/MainZone.jsx';
import Activity from './components/Activity.jsx';
import BottomNav from './components/public/BottomNav.jsx';
import Order from './components/order/Order.jsx';
import FoodZone from './components/order/FoodZone.jsx';
import Index from './components/Index.jsx';
import App from './render/App.jsx';

const history = useBasename(createHistory)({
  basename: '/React-Router'
});

ReactDOM.render((
	// <div>
 //        <Index />
 //    </div>
    <Router>
        <Route history={browserHistory} path="/" component={App}>
            <IndexRoute component={Index} />

            <Route path="/order" component={Order}>＜IndexRedirect to="/welcome" />
                <IndexRoute component={FoodZone} />
                <Route path="/foodZone/:foodtype" component={FoodZone} />
            </Route>
        </Route>
    </Router>
    
),document.getElementById('app'))
