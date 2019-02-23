import React from 'react';
import { Select, Radio } from 'antd';
const Option = Select.Option;
export default {
    formateDate(time1) {
        let month = '';
        let day = '';
        let hour = '';
        let minute = '';
        let second = '';
        if (!time1) {
            return '';
        }
        if ((time1.getMonth()+1).toString().length === 1) {
            month = '0' + (time1.getMonth()+1);
        } else {
            month = time1.getMonth()+1;
        }
        if (time1.getDate().toString().length === 1) {
            day = '0' + time1.getDate();
        } else {
            day = time1.getDate();
        }
        if (time1.getHours().toString().length === 1) {
            hour = '0' + time1.getHours();
        } else {
            hour = time1.getHours();
        }
        if (time1.getMinutes().toString().length === 1) {
            minute = '0' + time1.getMinutes();
        } else {
            minute = time1.getMinutes();
        }
        if (time1.getSeconds().toString().length === 1) {
            second = '0' + time1.getSeconds();
        } else {
            second = time1.getSeconds();
        }
        return time1.getFullYear() + "-" + month +"-"+day+" "+hour+":"+minute+":"+second;
    },
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = [];
        data.map((item) => {
            return options.push(<Option value={item.id}>{item.name}</Option>)
        });
        return options;
    },
    getRadioList(data) {
        if (!data) {
            return [];
        }
        let radios = [];
        data.map((item) => {
            return radios.push(<Radio value={item.id}>{item.name}</Radio>)
        });
        return radios;
    }
}
