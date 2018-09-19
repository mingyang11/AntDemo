import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import './index.less';
class Notification extends Component{
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '通知提醒',
            description: '我想我的工资了，啥时候给我'+type,
        });
    };
    render() {
        return <div>
            <Card title="通知提醒框" className="card-wrap">
                <Button type="primary" onClick={() => {this.openNotificationWithIcon('success')}}>Success</Button>
                <Button type="primary" onClick={() => {this.openNotificationWithIcon('info')}}>Info</Button>
                <Button type="primary" onClick={() => {this.openNotificationWithIcon('warning')}}>Warning</Button>
                <Button type="primary" onClick={() => {this.openNotificationWithIcon('error')}}>Error</Button>
            </Card>
            <Card title="通知提醒框" className="card-wrap">
                <Button type="primary">primary</Button>
                <Button type="primary">default</Button>
                <Button type="primary">dashed</Button>
                <Button type="primary">danger</Button>
            </Card>
        </div>;
    }
}

export default Notification;
