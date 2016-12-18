

import React from 'react';

let Activity = React.createClass({

    getInitialState: function(){
        return {}          
    },  

 	componentDidMount: function() {
          
 	},

    render: function () {
        return(
            <div id="activity" className="flexbox">
                <div className="flex-box border-r">
                    <a>
                        <p>会员专享</p>
                        <span>会员才有的优惠</span>
                        <div>
                            <img className="img-auto" src="images/a1.jpg" />
                        </div>
                    </a>
                </div>
                <div className="flex-box">
                    <a>
                        <p>会员专享</p>
                        <span>会员才有的优惠</span>
                        <div>
                            <img className="img-auto" src="images/a1.jpg" />
                        </div>
                    </a>
                </div>
            </div>
        )
	}

})
module.exports = Activity;