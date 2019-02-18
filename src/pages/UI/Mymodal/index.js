import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import Modal from './Modal';
class Carousel extends Component{
    constructor (props) {
        super(props);
        this.state = {
            visible: false,
            title: '标题',
            content: '内容',
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
      console.log('onclose');
    };
    onConfirm = () => {
        console.log('confirm');
    };
    render() {
        const { visible, title, content } = this.state;
        return <Fragment>
            <Modal
                visible={visible}
                title={title}
                content={content}
                onClose={this.onClose}
                onConfirm={this.onConfirm}
            />
            <Button
                onClick={() => this.showModal()}
            >切换显隐</Button>
        </Fragment>;
    }
}

export default Carousel;
