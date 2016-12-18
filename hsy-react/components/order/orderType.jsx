
import React from 'react'; 
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

let OrderType = React.createClass({
        getInitialState: function(){
            return {
                tabs:[
                    {foodName:"限时特卖",id:1},
                    {foodName:"包子",id:2},
                    {foodName:"豆浆",id:3},
                    {foodName:"茶叶蛋",id:4},
                    {foodName:"超值套餐",id:5}
                ],
                tabId:1
            }
        }, 

        tabActived: function(id){
            this.setState({
                tabId:id
            });
        },

        render: function() {
            let actived = {
                color: "#f85050"
            }

            return(
                <div className="flex-box flex-box-1 orderType">
                    <ul className="clearPad">
                        {
                            this.state.tabs.map((data,index) => {
                                //alert(data.id);
                                let myStyle;
                                
                                //这里用activeStyle就可以，为了用Tab切换示例
                                if(data.id == this.state.tabId){
                                    myStyle = actived;
                                }

                                return <li onClick={this.tabActived.bind(this,data.id)} key={index}><Link style={myStyle} to={"/foodZone/" + data.id}>{data.foodName}</Link></li>
                            })
                        }

                    </ul>
                </div>
            )
        }
}) 

module.exports = OrderType;