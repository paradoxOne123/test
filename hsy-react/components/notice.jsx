

import React from 'react';
import ReactDOM from 'react-dom';

let Notice = React.createClass({
	getInitialState: function() {
        return {
        	noticeList: [],
        };
 	},

 	componentDidMount: function() {
        this.serverRequest = $.get(this.props.source,function(data){   
            //if(data.status) {
                if(this.isMounted()){
                    this.setState({
                        noticeList: data.noticeList,
                    })
                    new Swiper ('#notice .swiper-container', {
					    loop: true,
					    direction: "vertical",
					    autoplay : 1500,    
					}) 
                }
            //}
        }.bind(this))
 	}, 

 	componentWillUnmount: function() {
	    this.serverRequest.abort();
	},

 	render: function() {
 	    let countId = 0;
        return(
            <div id="notice">
                <span className="iconfont">&#xe64c;</span>
                <div className="swiper-container">
			        <div className="swiper-wrapper">
			            {
                            this.state.noticeList.map((ntc) => {
                                return(
                                    <div className="swiper-slide" key={"notice" + countId++}>
                                        <a href={ntc.link}>{ntc.text}</a>
                                    </div>
                                )
                            })
			            }
			        </div>
			    </div>
            </div>
        )
 	}
})

module.exports = Notice;