
import React from 'react'; 
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

let Head = React.createClass({
        getInitialState: function(){
            return {
        	    bg: "#f85050"
            }
        },     

        componentDidMount: function() {
            //alert(this.refs.pulldownmenu.style.display);
            this.refs.pulldownmenu.style.display = this.state.disy;
            window.onscroll = (event) => {
                let topHeight = document.documentElement.scrollTop||document.body.scrollTop;
                let opacity = 1 - 0.8 * (topHeight/180);
                //console.log(opacity);
                
                if(opacity >= 0.5){
                    this.setState({
                      bg: `rgba(234, 44, 44, ${opacity})`,
                    })
                   // alert(this.state.bg);
                }
            }
        },

        handleClick: function() {
            let currentDisplay = this.refs.pulldownmenu.style.display;
            let display = currentDisplay=="none" ? "block" : "none";
            this.refs.pulldownmenu.style.display = display;
        },

        showCover(){
            this.props.showCover('active');
        },

        showLeftModal(){
            this.props.showModalToLeft('active');
        },

        render: function() {
            let style={
                display: "none"
            }
            let bColor = this.state.bg ? this.state.bg : "transprent";
            return(
                <div className="head flexbox w_fluid" style={{ background: bColor }}>
                    <div className="headLeft" dangerouslySetInnerHTML={{__html:this.props.leftText}}>
                    </div>
                    <div className="headMiddle">
                        {this.props.middleText}
                    </div>
                    <div id="kf" className="headRight">
                        <span className="iconfont" onClick={this.handleClick}>&#xe628;</span>
                        <ul ref="pulldownmenu" style={style}>
                            <li><a onClick={this.showLeftModal}>搜索</a></li>
                            <li><a>客服咨询</a></li>
                        </ul>  
                    </div>
                </div> 
            )
        }
}) 

module.exports = Head;