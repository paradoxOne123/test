

import React from 'react';

let Banner = React.createClass({
	getInitialState: function() {
        return {
        	imgUrls: [],
        };
 	},

 	componentDidMount: function() {
 	    this.serverRequest = $.get(this.props.source,function(data){
 	        //if(data.status) {
 	            if(this.isMounted()) {
 	                this.setState({
 	                    imgUrls: data.imgUrls,
 	                })
 	                new Swiper ('#banner .swiper-container', {
					    loop: true,
					    pagination: '.swiper-pagination',
					    paginationClickable: true,
					    autoplay : 3000,
						autoplayDisableOnInteraction : false,
					}) 
 	            }
 	        //}
 	    }.bind(this))
 	},

 	componentWillUnmount: function() {
	    this.serverRequest.abort();
	},
  
    render: function () {
		let countId = 0;//手动添加unique constant key的话，用于react记录dom操作，重新渲染时比较DOM数
	    return (
	      <div id="banner">
    		<div className="swiper-container">
			    <div className="swiper-wrapper">
			    	{
			    		this.state.imgUrls.map((url) => {
			    			return (
			    			    <div className="swiper-slide" key={"header" + countId++} >
			    						<img className="img" src={url} />
			    				</div>
			    			)
			    		})
			    	}
			    </div>
				<div className="swiper-pagination"></div>
			</div>
	      </div>
	    );
	}

})
module.exports = Banner;