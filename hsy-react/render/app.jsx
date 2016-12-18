import React from 'react';
import ReactDOM from 'react-dom';

import BottomNav from '../components/public/BottomNav.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


require('../css/main.css');
require('../css/activity.css');
require('../css/banner.css');
require('../css/bottomNav.css');
require('../css/head.css');
require('../css/mainZone.css');
require('../css/notice.css');
require('../css/order.css');

let App = React.createClass({
        getInitialState: function(){
            return {
                
            }
        }, 

        render: function() {
            return(
                <div>
                    {this.props.children}

                    <div className="footer">
						<BottomNav  />
					</div>
                </div>
            )
        }
}) 

module.exports = App;