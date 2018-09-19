import React, { Component } from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios/index'

class BasicTable extends Component{
    state = {
        dataSource2: [],
    };
    params = {
        page:1
    };
    componentDidMount() {
        this.RequestData();
    }
    RequestData = () => {
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                },
                // 用来判断是否展示加载动画
                // isShowLoading: false,
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.result.list,
                });
            }
        });
    };
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
            sex: '男',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
            sex: '男',
        }];
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render: (record1) => {
                if (record1 === 1) {
                    return '男';
                }
                return "女";
            }
        }];
        return (
            <div>
                <Card title="基础表格 " className="card-wrap">
                    <Table dataSource={dataSource} columns={columns} bordered position rowKey="key" />
                </Card>
                <Card title="动态数据渲染表格" className="card-wrap">
                    <Table
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        bordered
                        position
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTable;
