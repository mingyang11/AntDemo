import React, { Component } from 'react';
import { Card, Form, Input, Icon, Button, Radio, InputNumber, Select, Switch, DatePicker, Upload, Checkbox } from 'antd';
import './index.less';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;


class Register extends Component{
    state = {};
    handleSumit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    };
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const formItemInput = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:4
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单" className="card-wrap">
                    <Form layout="horizontal">
                        <FormItem {...formItemLayout} label="用户名">
                            {getFieldDecorator('userName', {
                                initialValue: 'Eleven',
                                rules: [{
                                    required: true, message: '请输入用户名',
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                initialValue: 'qa123456',
                                rules: [{
                                    required: true, message: '请输入密码',
                                }],
                            })(
                                <Input type="password" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                initialValue: '1',
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                    <Radio value="3">未知</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem label="年龄" {...formItemInput}>
                            {getFieldDecorator('age', {
                                initialValue: '18',
                            })(
                                <InputNumber />
                            )}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {getFieldDecorator('currentStatus', {
                                initialValue: '1',
                            })(
                                <Select
                                    onFocus={() => {console.log('你是傻狗')}}
                                >
                                    <Option value="1">未毕业</Option>
                                    <Option value="2">肄业</Option>
                                    <Option value="3">准备就业</Option>
                                    <Option value="4">offer拿到手</Option>
                                    <Option value="5">人生赢家</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('love', {
                                initialValue: ['1','2'],
                            })(
                                <Select  mode="multiple">
                                    <Option value="1">未毕业</Option>
                                    <Option value="2">肄业</Option>
                                    <Option value="3">准备就业</Option>
                                    <Option value="4">offer拿到手</Option>
                                    <Option value="5">人生赢家</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator('isMarried', {
                                valuePropName:'checked',
                                initialValue: true
                            })(
                                <Switch />,
                            )}
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {getFieldDecorator('birth')(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                />
                            )}
                        </FormItem>
                        <FormItem label="地址" {...formItemLayout}>
                            {getFieldDecorator('address')(
                                <TextArea />
                            )}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {getFieldDecorator('img')(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    onChange={this.handleChange}
                                >
                                    {this.state.imageUrl?<img src={this.state.imageUrl} alt="头像图片" />:<Icon type="plus"/>}
                                </Upload>
                            )}
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {getFieldDecorator('agree')(
                                <Checkbox>我已阅读<a>协议</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {getFieldDecorator('submit')(
                                <Button onClick={this.handleSumit}>提交</Button>
                            )}
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Register);
