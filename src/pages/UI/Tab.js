import React, { Component } from 'react';
import { Card, Tabs, Icon } from 'antd';
import './index.less';
const TabPane = Tabs.TabPane;
class Tab extends Component{
    render() {
        return <div>
            <Card title="基本tabs" className="card-wrap">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="选项1" key="1">选项1</TabPane>
                    <TabPane tab="选项2" key="2">选项2</TabPane>
                    <TabPane tab="选项3" key="3">选项3</TabPane>
                </Tabs>
            </Card>
            <Card title="带标签的tabs" className="card-wrap">
                <Tabs defaultActiveKey="1">
                    <TabPane key="1" tab={<span><Icon type="apple" />选项1</span>}>选项1</TabPane>
                    <TabPane tab={<span><Icon type="apple" />选项2</span>} key="2">选项2</TabPane>
                    <TabPane tab={<span><Icon type="apple" />选项3</span>} key="3">选项3</TabPane>
                </Tabs>
            </Card>
            <Card title="禁用的tabs" className="card-wrap">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="选项1" key="1" disabled>选项1</TabPane>
                    <TabPane tab="选项2" key="2" disabled>选项2</TabPane>
                    <TabPane tab="选项3" key="3">选项3</TabPane>
                </Tabs>
            </Card>
        </div>
    }
}

export default Tab;
