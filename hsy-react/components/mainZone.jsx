
import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, IndexLink } from 'react-router';

let MainZone = React.createClass({

    getInitialState: function(){
        return {
            data: [
                {
                    "link": "/order",
                    "icon": '\ue655',
                    "bg":"#f8ce44",
                    "tit":"我要订餐"
                },
                {
                    "link": "order.html",
                    "icon": "\ue665",
                    "bg":"#4a647d",
                    "tit":"抢饭碗"
                },
                {
                    "link": "order.html",
                    "icon": "\ue6c6",
                    "bg":"#b8d644",
                    "tit":"众筹"
                },
                {
                    "link": "order.html",
                    "icon": "\ue713",
                    "bg":"#d47c88",
                    "tit":"抢红包"
                }
            ]
        }
    },  

 	componentDidMount: function() {
          
 	},

    render: function () {
        let countId = 0;
		return(
            <div id="mainZone" className="flexbox">
                {
                    this.state.data.map((data) => {
                        let iconstr = data.icon;
                        console.log(iconstr);
                        return(
                            <div className="flex-box flex-box-1" key={"header" + countId++}>
                                <Link to={data.link}  style={{ background: data.bg }}>
                                    <span className="iconfont">{iconstr}</span>
                                </Link>    
                                <span className="subtit">{data.tit}</span>   
                            </div>
                        )
                    })
                }
            </div>
		)
	}

})
module.exports = MainZone;