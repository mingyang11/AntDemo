import React, { Component } from 'react';
import { Card, Table, Modal } from 'antd';
import BaseForm from '../../components/BaseForm/index';
import axios from "../../axios";
import './index.less';
const model1 = {
    1:'全部',
    2:'指定停车点',
    3:'禁停区',
};

const model2 = {
    1: '全部',
    2: '自营',
    3: '加盟',
};
class CityControl extends Component{
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         delVisibel: false,
    //         editVisible: false,
    //     };
    // }
    state = {};
    params = {
        page:1
    };
    componentDidMount() {
        this.RequestData();
    }
    RequestData = () => {
        let _this = this;
        axios.requestList(_this,'/city/list', this.params, true);
    };
    showModal = (type) => {
        if (type === 'del') {
            this.setState({
                delVisibel: true,
            });
        } else if (type === 'edit') {
            this.setState({
                editVisible: true,
            });
        }
    };
    handleOk = () => {
        this.setState({
            editVisible: false,
        });
    };
    handleCancel = () => {
        this.setState({
            editVisible: false,
        });
    };
    handleOk1 = () => {
        this.setState({
            delVisibel: false,
        });
    };
    handleCancel1 = () => {
        this.setState({
            delVisibel: false,
        });
    };

    render() {
        const fields = [
            {
                label: '城市',
                type: 'select',
                name: 'city',
                initialValue: 1,
                width: 100,
                list: [{
                    id: 1, name: '全部'
                }, {
                    id: 2, name: '北京'
                }, {
                    id: 3, name: '上海'
                }, {
                    id: 4, name: '杭州'
                }, {
                    id: 5, name: '襄阳'
                }],
            },
            {
                label: '用车模式',
                type: 'select',
                name: 'carModal',
                placeholder: '请选择用车模式',
                width: 150,
                list: [{
                    id: 1, name: '全部'
                }, {
                    id: 2, name: '指定停车点'
                }, {
                    id: 3, name: '禁停区'
                }],
            },
            {
                label: '营运模式',
                type: 'select',
                name: 'playModal',
                placeholder: '请选择用车模式',
                width: 150,
                list: [{
                    id: 1, name: '全部'
                }, {
                    id: 2, name: '自营'
                }, {
                    id: 3, name: '加盟'
                }]
            },
            {
                label: '状态',
                type: 'select',
                name: 'status',
                placeholder: '请选择状态',
                width: 150,
                list: [{
                    id: 1, name: '全部'
                }, {
                    id: 2, name: '已授权'
                }, {
                    id: 3, name: '未授权'
                }]
            }
        ];
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'cityId',
                align: 'center',
            },
            {
                title: '城市名称',
                dataIndex: 'cityName',
                align: 'center',
            },
            {
                title: '用车模式',
                dataIndex: 'userCarModel',
                align: 'center',
                render: (text) => model1[text]
            },
            {
                title: '营运模式',
                dataIndex: 'playModel',
                align: 'center',
                render: (text) => model2[text]
            },
            {
                title: '授权加盟商',
                dataIndex: 'join',
                align: 'center',
            },
            {
                title: '城市管理员',
                dataIndex: 'administritor',
                align: 'center',
            },
            {
                title: '开通时间',
                dataIndex: 'openTime',
                align: 'center',
            },
            {
                title: '操作时间',
                dataIndex: 'operateTime',
                align: 'center',
            },
            {
                title: '操作人',
                dataIndex: 'operateUser',
                align: 'center',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                align: 'center',
                render: () => {
                    return (<div>
                        <span><a role='button' onClick={this.showModal}>编辑</a></span>
                        <span> | </span>
                        <span role='button' onClick={this.showModal}><a>删除</a></span>
                    </div>);
                }
            }
        ];
        return <div>
            <Card className="card-wrap">
                <BaseForm field={fields} onSearch={this.handleFilter} />
            </Card>
            <Card className="card-wrap">
                <Table
                    columns={columns}
                    dataSource={this.state.list}
                    rowKey={'cityId'}
                    size={"small"}
                    // bordered
                >
                </Table>
            </Card>
            <Modal title="Title"
                   visible={this.state.editVisible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
            >
                <p>jjj</p>
            </Modal>
            <Modal title="删除"
                   visible={this.state.delVisibel}
                   onOk={this.handleOk1}
                   onCancel={this.handleCancel1}
                   okText='确认'
                   cancelText='取消'
            >
                <p>是否确定删除，删除后数据无法恢复</p>
            </Modal>
        </div>;
    }
}

export default CityControl;
