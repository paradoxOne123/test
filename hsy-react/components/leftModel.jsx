
import React from 'react'; 
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

let LeftModel = React.createClass({
        //getInitialState: function(){
            
        //},

        hideModal(){
            this.props.showModalToLeft('hide');
        },     

        render: function() {
            let showOrHide = this.props.ModalToLeftState;
            //alert(showOrHide);
            let translateX = showOrHide=='active' ? "translateX(0%)":"translateX(150%)";
            let display = showOrHide=='active' ? "block":"none";

            let cover={
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "10000",
                transition:"display 0.3s",
                WebkitTransition:"display 0.3s",
                backgroundColor: "rgba(0,0,0,0.5)",
                "display":display
            };
            let leftModal={
                position:"absolute",
                background:"#f5f5f5",
                zIndex:"10000",
                boxShadow:"0 0 24px rgba(0, 0, 0, 1)",
                transition:"transform 0.3s, opacity 0.3s",
                WebkitTransition:"-webkit-transform 0.3s, opacity 0.3s",
                MozTransition:"-moz-transform 0.3s, opacity 0.3s",
                transform: translateX,
                WebkitTtransform: translateX,
                width: "70%",
                display: "block",
                right: "0px",
                bottom: "0px",
                top:"0"
            };

            return(
                <div>
                    <div style={cover} onClick={this.hideModal}></div>
                    <div style={leftModal}>123</div>
                </div> 
            )
        }
}) 

module.exports = LeftModel;