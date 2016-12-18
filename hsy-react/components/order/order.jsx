
import React from 'react'; 

import Head from '../public/head.jsx';
import LeftModel from '../LeftModel.jsx';

import FoodZone from './FoodZone.jsx';
import OrderType from './OrderType.jsx';
import BottomNav from '../public/BottomNav.jsx';

let Order = React.createClass({
        getInitialState: function(){
            return {
                middleText:"点餐"
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
            let headerL="<a href=\"javascript:history.go(-1)\"><span class=\"iconfont\">&#xe660;</span></a>";
            return(
                <div>
                    <Head leftText={headerL} middleText={this.state.middleText}  showModalToLeft={this.showModalToLeft} showCover={this.showCover} />
                    <div className="w_fluid flexbox top40 order">
                        <OrderType />
                        {this.props.children}
                    </div>
                    
                    <LeftModel ModalToLeftState={this.state.ModalToLeftState} showModalToLeft={this.showModalToLeft} />
                </div>
            )
        }
}) 

module.exports = Order;