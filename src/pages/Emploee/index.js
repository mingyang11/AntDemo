import React, { Component } from 'react';
import { Card, Table, Button} from 'antd';
import BaseForm from '../../components/BaseForm/index';
import './index.less';
import axios from "../../axios";

const sexType = {
    1: '男',
    2: '女',
};
const departmentType = {
    1: '技术部',
    2: '运营部',
    3: '人事部',
    4: '财务部',
    5: '董事部',
};
class Emploee extends Component{
    state = {};
    params = {
        page:1
    };
    componentDidMount() {
        this.RequestData();
    }
    RequestData = () => {
        let _this = this;
        axios.requestList(_this,'/user/list', this.params, true);
    };
    render() {
        const fields = [{
            label: '工号',
            name: 'jobId',
            type: 'input',
            width: 140,
            placeholder: '请输入姓工号'
        }, {
            label: '姓名',
            name: 'userName',
            type: 'input',
            placeholder: '请输入姓名',
            width: 140,
        }, {
            label: '性别',
            name: 'sex',
            type: 'select',
            width: 100,
            initialValue: 1,
            list: [{id: 1, name: '男'}, {id: 2, name: '女'}],
        }, {
            label: '所属部门',
            name: 'departMent',
            type: 'select',
            width: 100,
            initialValue: 1,
            list: [{id: 1, name: '技术部'}, {id: 2, name: '运营部'}, {id: 3, name: '人事部'}, {id: 4, name: '财务部'}, {id: 5, name: '董事部'}],
        }];
        const columns = [{
            title: '工号',
            dataIndex: 'jobId',
            align: 'center',
            width: 160,
        }, {
            title: '姓名',
            dataIndex: 'userName',
            align: 'center',
            width: 80,
        }, {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 80,
            render: (text) => sexType[text],
        }, {
            title: '部门',
            dataIndex: 'departMent',
            align: 'center',
            width: 80,
            render: (text) => departmentType[text],
        }, {
            title: '年龄',
            dataIndex: 'age',
            align: 'center',
            width: 80,
        }, {
            title: '家庭地址',
            dataIndex: 'address',
            align: 'center',
            width: 150,
        }, {
            title: '联系电话',
            dataIndex: 'phone',
            align: 'center',
            width: 130,
        }, {
            title: '入职日期',
            dataIndex: 'joinDate',
            align: 'center',
            width: 130,
        }, {
            title: '操作',
            dataIndex: 'operate',
            align: 'center',
        }];
        return <div>
            <Card className="card-wrap">
                <BaseForm field={fields} onSearch={this.handleFilter} />
            </Card>
            <Card className="card-wrap">
                <Button type='primary'>开通城市</Button>
                <Table
                    columns={columns}
                    dataSource={this.state.list}
                    rowKey={'jobId'}
                    size={"small"}
                >
                </Table>
            </Card>
        </div>;
    }
}

export default Emploee;
