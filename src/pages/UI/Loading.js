import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './index.less';

class Loading extends Component{
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginLeft: 20 }} spin />;
        const antIcon2 = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 20px' }}/>
                    <Spin size="large" />
                    <Spin indicator={antIcon} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <div className="example">
                        <Spin size="large"/>
                    </div>
                    <Spin tip="Loading..." size="large">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin size="large" indicator={antIcon2}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="success"
                            style={{ marginTop: '20px' }}
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loading;
