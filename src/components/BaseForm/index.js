import React, { Component } from 'react';
import { Form, Button, Input, Select, Checkbox, DatePicker, Radio } from 'antd';
import Utils from '../../utils/utils';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class BaseForm extends Component{
    onSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.onSearch(fieldsValue);
    };
    reset = () => {
        this.props.form.resetFields();
    };
    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const field = this.props.field;
        const formItemList = [];
        if (field && field.length > 0) {
            field.forEach((item) => {
                let label = item.label;
                let name = item.name;
                let initialValue = item.initialValue;
                let width = item.width;
                let placeholder = item.placeholder;
                let type = item.type;
                let list = item.list;
                if (type === 'input' || !type) {
                    const INPUT = <FormItem label={label} key={name}>
                        {
                            getFieldDecorator([name], {
                                initialValue: initialValue,
                            })(
                                <Input type='text' placeholder={placeholder} style={{ width: width }}/>
                            )
                        }
                    </FormItem>
                    formItemList.push(INPUT);
                } else if (type === 'select') {
                    const SELECT = <FormItem label={label} key={name}>
                        {
                            getFieldDecorator([name], {
                                initialValue:initialValue,
                            })(
                                <Select placeholder={placeholder} style={{ width: width }}>
                                    {Utils.getOptionList(list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT);
                } else if (type === 'checkbox') {
                    const CHECKBOX = <FormItem label={label} key={name}>
                        {
                            getFieldDecorator([name], {
                                valuePropName: 'checked',
                                initialValue:initialValue,
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX);
                } else if (type === 'date') {
                    const Date = <FormItem label={label} key={name}>
                        {
                            getFieldDecorator([name], {
                                initialValue: initialValue,
                            })(
                                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                            )
                        }
                    </FormItem>;
                    formItemList.push(Date)
                } else if (type === 'radio') {
                    const RADIO = <FormItem label={label} key={name}>
                        {
                            getFieldDecorator([name], {
                                initialValue: initialValue,
                            })(
                                <RadioGroup>
                                    {Utils.getRadioList(list)}
                                </RadioGroup>
                            )
                        }
                    </FormItem>;
                    formItemList.push(RADIO);
                }
            });
        }
        return formItemList;
    };
    render() {
        return (
            <Form layout='inline'>
                <FormItem>
                    {this.initFormList()}
                    <Button type="primary" onClick={this.onSubmit}>搜索</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({})(BaseForm);
