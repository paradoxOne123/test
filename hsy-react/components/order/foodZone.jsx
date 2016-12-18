
import React from 'react'; 

let FoodZone = React.createClass({
        getInitialState: function(){
            return {
                foodList: [],
                foodtype: ''
            }
        }, 

        componentWillMount: function() {
            
        },

        render: function() {
            let countId = 0;

            let myStyle={
                display:'none'
            }

            let param = this.props.params.foodtype == undefined ? 1:this.props.params.foodtype;

            let url = "http://localhost:7777/data/food" + param + ".json";
            
            this.serverRequest = $.get(url,function(data){   
                //if(data.status) {
                    if(this.isMounted()){
                        this.setState({
                            foodList: data.foodList,
                        })
                    }
                //}
            }.bind(this))

            return(
                    <div className="flex-box flex-box-4 foodZone">
                        {
                            this.state.foodList.map((data) => {
                                return(
                                    <div className="foodBox flexbox" key={"foodZone" + countId++}>
                                        <div className="flex-box flex-box-1">
                                            <img className="img-auto" src={data.imgUrl} />
                                        </div>
                                        <div className="flex-box flex-box-2">
                                            <p className="fName">{data.fname}</p>
                                            <p className="fSold">已售：<span>{data.fsold}</span></p>
                                            <div className="clear addtoSc">
                                                <div className="left">
                                                    <span className="price">{'￥'+data.price}</span><span className="pre-price">{data.prePrive}</span>
                                                </div>
                                                <div className="right">
                                                    <a style={myStyle}  className="s" href="javasript:;"> - </a>
                                                        <span style={myStyle} className="fnum">0</span>
                                                    <a className="fAdd" href="javasript:;"> + </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            )
        }
}) 

module.exports = FoodZone;