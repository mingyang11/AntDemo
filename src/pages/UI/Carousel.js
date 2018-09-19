import React, { Component } from 'react';
import { Card, Button, message } from 'antd';
import './index.less';
class Carousel extends Component{
    render() {
        return <div>
            <Card title="全局提示" className="card-wrap">
                <Button type="primary" onClick={() => {message.success('哈哈哈哈，要发工资了')}}>Success</Button>
                <Button type="primary" onClick={() => {message.info("要发工资了?")}}>Info</Button>
                <Button type="primary" onClick={() => {message.warning('好像不发工资了')}}>Warning</Button>
                <Button type="primary" onClick={() => {message.error('工资不发了')}}>Error</Button>
            </Card>
        </div>;
    }
}

export default Carousel;
