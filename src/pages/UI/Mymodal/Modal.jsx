import React, { Component } from 'react';
import { Button } from 'antd';
import './Modal.less';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    componentDidMount() {
        this.setState({
            visible: this.props.visible,
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible
        })
    }
    handleConfirm = () => {
        const { onConfirm } = this.props;
        onConfirm && onConfirm();
        this.setState({
            visible: false,
        });
    };
    handleClose = () => {
        const { onClose } = this.props;
        onClose || onClose();
        this.setState({
            visible: false,
        });
    };
    handleMask = () => {
      this.setState({
          visible: false,
      });
    };
    render() {
        const { title, content } = this.props;
        const { visible } = this.state;
        return visible && <div className="wrapper">
            <div className="modal">
                <div className="title">{ title }</div>
                <div className="content">{ content }</div>
                <div className="operator">
                    <Button className="confirm" onClick={() => this.handleConfirm()}>确认</Button>
                    <Button className="close" onClick={() => this.handleClose()}>取消</Button>
                </div>
            </div>
            <div className="mask" onClick={() => this.handleMask()} />
        </div>
    }
}

export default Modal;