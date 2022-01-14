import axios from 'axios';
import { message } from 'antd';

var instance = axios.create({
    // baseURL: process.env.NODE_ENV,
    baseURL: process.env.NODE_ENV,
    headers: {
        "X-Request-Source": md5(process.env.VUE_APP_ID),
        "Content-Type": "application/json"
    },
    responseType: "json",
    timeout: 30000
});

/*
  response 拦截
*/
instance.interceptors.response.use(
    res => {
        if ((res || {}).data.code == 401) {
            clean();
            window.location.reload();
            return;
        }
        if ((res || {}).data.code == 403) {
            message.error({
                title: '警告',
                message: "没有权限"
            })
            return;
        }
        return res;
    },
    error => {
        if ((error.response || {}).data.code == 401) {
            clean();
            window.location.reload();
            return Promise.reject(error);
        }
        if ((error.response || {}).data.code == 403) {
            message.error({
                title: '警告',
                message: "没有权限"
            })
            return Promise.reject(error);
        }
        if (String(error).indexOf("Network Error") !== -1) {
            message.error({
                title: '警告',
                message: "服务器暂停访问，请联系管理员！"
            })
        }
        return Promise.reject(error);
    }
);


export function post(uri, params) {
    return instance.post(uri, params || {}).then(res => {
        return Promise.resolve((res || {}).data || {})
    });
}

export function get(uri, params) {
    return instance.get(uri, params || {}).then(res => {
        return Promise.resolve((res || {}).data || {})
    });
}
