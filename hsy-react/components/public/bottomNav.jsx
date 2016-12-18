
import React from 'react'; 
import { Router, Route, Link, hashHistory, IndexRoute, IndexLink } from 'react-router';

let BottomNav = React.createClass({
        getInitialState: function(){
            return {
        	    
            }
        },     

        render: function() {
            return(
                <div id="botmNav" className="flexbox w_fluid">       

                    <div className="flex-box flex-box-1">
                        <IndexLink activeStyle={{backgroundColor: '#585858'}} to="/">
                            <i className="iconfont">&#xe64f;</i>
                            <span className="subtit">首页</span>   
                        </IndexLink>    
                    </div>

                    <div className="flex-box flex-box-1">
                        <Link activeStyle={{backgroundColor: '#585858'}} to="/order">
                            <i className="iconfont">&#xe603;</i>
                            <span className="subtit">订单</span>   
                        </Link>    
                    </div>

                    <div className="flex-box flex-box-1">
                        <Link activeStyle={{backgroundColor: '#585858'}} to="/user">
                            <i className="iconfont">&#xe659;</i>
                            <span className="subtit">个人中心</span>   
                        </Link>    
                    </div>
                </div> 
            )
        }
}) 

module.exports = BottomNav;