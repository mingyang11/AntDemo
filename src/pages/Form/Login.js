import React, { Component } from 'react';
import { Card, Form, Input, Icon, Button, Checkbox } from 'antd';
import './index.less';
const FormItem = Form.Item;

class Login extends Component{
    handleSumit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card-wrap">
                    <Form style={{ width: '300px' }} onSubmit={this.handleSumit}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '用户名为必填项' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '密码为必填项' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a style={{ float: "right" }} className="login-form-forgot">忘记密码？</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" style={{ width:"300px" }} onClick={this.handleSumit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Login);
