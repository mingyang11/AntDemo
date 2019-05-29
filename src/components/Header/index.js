import React, { Component } from 'react';
import { Row, Col, Menu, Dropdown} from 'antd';
import { connect } from 'react-redux';
import "./index.less";
import Util from '../../utils/utils';
import axios from '../../axios';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Eleven',
            currentTime: '',
            city: '杭州',
        }
        // this.getWeatherAPIData();
    }
    componentWillMount(){
        setInterval(() => {
            let time = Util.formateDate(new Date());
            this.setState({
                currentTime:time,
            });
        },1000)
    }
    getWeatherAPIData() {
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(this.state.city)+'&output=json&ak=G9MTCUGu28nM2QGA6yLIVwOHpZofGYCS'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                });
            }
        });
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a>退出</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a>修改密码</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a>忘记密码</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span='24'>
                        <span>欢迎，{this.state.userName}</span>
                        <Dropdown overlay={ menu } trigger={['click']}>
                            <a className="ant-dropdown-link">
                                退出
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        { this.props.menuName }
                    </Col>
                    <Col span="20" className="weather">
                        <span className="weather-time">{this.state.currentTime}</span>
                        <span  className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                            <span>{this.state.city}</span>
                        </span>
                        <span className="weather-type">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         menuName: state.menuName,
//     }
// }
// export default connect(mapStateToProps)(Header);
export default Header;
