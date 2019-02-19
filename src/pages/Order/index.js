import React, { Component } from 'react';
import { Card, Table } from 'antd';
import BaseForm from '../../components/BaseForm/index';
import './index.less';
import axios from "../../axios";

const orderStatus = {
    1:'待付款',
    2:'待发货',
    3:'待签收',
    4:'已完成',
    5:'已关闭',
};

const orderType = {
    1: '常规',
    2: '拼团',
};
class Order extends Component{
    state = {};
    params = {
        page:1
    };
    componentDidMount() {
        this.RequestData();
    }
    RequestData = () => {
        let _this = this;
        axios.requestList(_this,'/order/list', this.params, true);
    };
    handleFilter = (params) => {
        this.params = params;
        this.RequestData();
    };
    render() {
        const fields = [
            {
                label: '姓名',
                name: 'userName',
                placeholder: '请输入姓名'
            },
            {
                label: '职业',
                type: 'select',
                name: 'job',
                placeholder: '请选择职业',
                width: 200,
                list: [{ id: 1, name: 'student' }, { id: 2, name: 'teacher' }, { id: 3, name:'frontEnd' }],
            }
        ];
        const columns = [
            {
                title: '订单ID',
                dataIndex: 'orderId',
                width: 100,
                align: 'center',
            },
            {
                title: '订单名称',
                dataIndex: 'orderName',
                align: 'center',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                align: 'center',
                width: 200,
            },
            {
                title: '创建人',
                dataIndex: 'createUsername',
                align: 'center',
                render: (text,record) => {
                    return (
                        <div>
                            <span>{record.createUsername}</span><br/>
                            <span>{record.createTime}</span>
                        </div>
                    );
                },
            },
            {
                title: '修改人',
                dataIndex: 'updateUsername',
                align: 'center',
                render: (text,record) => {
                    return (
                        <div>
                            <span>{record.updateUsername}</span><br/>
                            <span>{record.updateTime}</span>
                        </div>
                    );
                }
            },
            {
                title: '活动时间',
                dataIndex: 'activityTime',
                align: 'center',
                render: (text,record) => {
                    return (
                        <div>
                            <span>{ record.activityTimeEnd }</span><br/>
                            <span>{ record.activityTimeStart }</span>
                        </div>
                    );
                }
            },
            {
                title: '活动类型',
                align: 'center',
                dataIndex: 'type',
                render: (text) => orderType[text],
            },
            {
                title: '活动状态',
                dataIndex: 'status',
                align: 'center',
                render: (text) => orderStatus[text],
            },
            {
                title: '活动时长',
                dataIndex: 'groupTime',
                align: 'center',
                render: (text) => {
                    const time = text + '小时';
                    return time;
                }
            },
            {
                title: '操作',
                width: 100,
                render: (text, record) => {
                    if (record.type === 1) {
                        return (
                            <div>
                                <span><a>核销</a></span>
                                <span> | </span>
                                <span><a>删除</a></span>
                            </div>
                        );
                    }
                    return (
                        <div>
                            <span><a>反核销</a></span>
                            <span> | </span>
                            <span><a>删除</a></span>
                        </div>
                    );
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
                    rowKey={'orderId'}
                    size={"small"}
                    // bordered
                >
                </Table>
            </Card>
        </div>;
    }
}

export default Order;
