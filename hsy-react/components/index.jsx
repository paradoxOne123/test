
import React from 'react'; 
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Head from './head.jsx';
import Banner from './banner.jsx';
import Notice from './Notice.jsx';
import MainZone from './MainZone.jsx';
import Activity from './Activity.jsx';
import BottomNav from './public/BottomNav.jsx';
import LeftModel from './LeftModel.jsx';

let Index = React.createClass({
        getInitialState: function(){
            return {
                'ModalToLeftState':'hide',
                'coverState':'hide'
            }
        }, 

        showCover(active){
            this.setState({
                'coverState':active
            })
        },    

        showModalToLeft(active){
            this.setState({
                'ModalToLeftState':active
            })
        },

        render: function() {
            return(
                <div>
                    <Head showModalToLeft={this.showModalToLeft} showCover={this.showCover}/>
			        <Banner source="http://localhost:7777/data/banner.json" />
			        <Notice source="http://localhost:7777/data/noticeList.json" />
			        <MainZone />
			        <Activity />
			        <Activity />
			        <Activity />
			        <BottomNav />
			        <LeftModel ModalToLeftState={this.state.ModalToLeftState} showModalToLeft={this.showModalToLeft} />
                </div> 
            )
        }
}) 

module.exports = Index;