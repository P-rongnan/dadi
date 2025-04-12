// import request from '@/http/httpload.js'
import request from '@/utils/request'; //导入http下的httpload.js

export function getlist(data: Record<string, any>) {
    // get请求 可以拼接url或者传入数据对象 二选一
    return request.get('/list', { params: data });
}
// 获取验证图片
export function getCaptcha() {
    return request.get('/api/v1/getCaptcha');
}
export function loginA(data: Record<string, any>) {
    return request.post('/login', data);
}
export function refreshtoken(data: Record<string, any>) {
    return request.post('/refreshtoken', data);
}
