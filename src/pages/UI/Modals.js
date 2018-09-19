import React, { Component } from 'react';
import { Button, Card, Modal } from 'antd';
import './index.less';
class Modals extends Component{
    state = {
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    };
    handleModal1 = () => {
        this.setState({
            state1: true,
        });
    };
    handleModal2 = () => {
        this.setState({
            state2: true,
        });
    };
    handleModal3 = () => {
        this.setState({
            state3: true,
        });
    };
    handleModal4 = () => {
        this.setState({
            state3: true,
        });
    };
    handleConfirm = (type) => {
        Modal[type]({
            title: '信息提示框',
            content: '消息提示类型:' + type,
        });
    };
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={this.handleModal1}>open</Button>
                    <Button type="primary" onClick={this.handleModal2}>自定义页脚</Button>
                    <Button type="primary" onClick={this.handleModal3}>自定义高度</Button>
                    <Button type="primary" onClick={this.handleModal4}>水平居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.handleConfirm("info")}}>info</Button>
                    <Button type="primary" onClick={() => {this.handleConfirm("success")}}>success</Button>
                    <Button type="primary" onClick={() => {this.handleConfirm("error")}}>error</Button>
                    <Button type="primary" onClick={() => {this.handleConfirm("warning")}}>warning</Button>
                </Card>
                <Modal
                    title="基础对话框"
                    visible={this.state.state1}
                    onOk={() => {this.setState({ state1: false })}}
                    onCancel={() => {this.setState({ state1: false })}}
                >
                    <p>今天没有事，大家一起hi起来</p>
                </Modal>
                <Modal
                    title="自定义对话框"
                    visible={this.state.state2}
                    onOk={() => {this.setState({ state2: false })}}
                    onCancel={() => {this.setState({ state2: false })}}
                    okText="确定"
                    cancelText="取消"
                >
                    <p>今天没有事，大家一起hi起来</p>
                </Modal>
                <Modal
                    title="自定义高度对话框"
                    style={{ top: 20 }}
                    visible={this.state.state3}
                    onOk={() => {this.setState({ state3: false })}}
                    onCancel={() => {this.setState({ state3: false })}}
                    okText="确定"
                    cancelText="取消"
                >
                    <p>今天没有事，大家一起hi起来</p>
                </Modal>
                <Modal
                    title="居中对话框"
                    visible={this.state.state4}
                    onOk={() => {this.setState({ state4: false })}}
                    onCancel={() => {this.setState({ state4: false })}}
                    okText="确定"
                    cancelText="取消"
                >
                    <p>今天没有事，大家一起hi起来</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;
