import React, { Component } from 'react';
import { Card, Button, Radio, Icon } from 'antd';
import './index.less';
class Buttons extends Component{
    state = {
        size: 'large',
        load: false,
    };
    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value,
        });
    };
    onClickhh = () => {
        this.setState({
            load: true,
        });
    }
    render() {
        return <div>
            <Card title="基础按钮" className="card-wrap">
                <Button type="primary">primary</Button>
                <Button>default</Button>
                <Button type="dashed">dashed</Button>
                <Button type="danger">danger</Button>
                <Button type="primary" disabled>danger</Button>
                <Button ghost>ghost</Button>
            </Card>
            <Card title="图形按钮" className="card-wrap">
                <Button icon="plus">创建</Button>
                <Button icon="edit">编辑</Button>
                <Button icon="delete">删除</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">搜索</Button>
            </Card>
            <Card title="按钮尺寸" className="card-wrap">
                <Radio.Group onChange={this.handleSizeChange} style={{ marginRight: "20px" }}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <Button size={this.state.size}>buttons</Button>
                <Button size={this.state.size}>buttons</Button>
                <Button size={this.state.size}>buttons</Button>
            </Card>
            <Card title="按钮组" className="card-wrap">
                <Button.Group>
                    <Button type="primary" style={{ marginRight: 0 }}>
                        <Icon type="left" />后退
                    </Button>
                    <Button type="primary">
                        前进<Icon type="right" />
                    </Button>
                </Button.Group>
            </Card>
            <Card title="Loading..." className="card-wrap">
                <Button loading type="primary">Button</Button>
                <Button type="primary" onClick={this.onClickhh} loading={this.state.load}>Button</Button>
                <Button shape="circle" loading/>
            </Card>
        </div>;
    }
}

export default Buttons;
