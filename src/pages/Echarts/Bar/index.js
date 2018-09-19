import React, { Component } from 'react';
import { Card } from 'antd';
import echartTheme from './../echartTheme';
import echarts from 'echarts/lib/echarts'
import './index.less';
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
class Bar extends Component{
    componentWillMount(){
        echarts.registerTheme('Imooc', echartTheme);
    }
    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'bar',
                    data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
        return option;
    };
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['ofo','摩拜','小鸣单车']
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series:[
                {
                    name:'ofo',
                    type:'bar',
                    data:[100,200,150,300,200,120,80]
                },
                {
                    name:'摩拜',
                    type:'bar',
                    data:[1000,2000,1500,3000,2000,1200,800]
                },
                {
                    name:'小鸣单车',
                    type:'bar',
                    data:[10000,20000,15000,30000,20000,12000,8000]
                }
            ]
        }
        return option;
    };
    render() {
        return <div>
            <Card className="card-wrap" title="柱状图一">
                <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}}/>
            </Card>
            <Card className="card-wrap" title="柱状图二">
                <ReactEcharts option={this.getOption2()} theme="Imooc" style={{ height: 500 }} />
            </Card>
        </div>;
    }
}

export default Bar;
