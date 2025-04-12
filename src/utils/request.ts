import Request from 'luch-request'; //npm下载引入luch-request

// const api = import.meta.env.VITE_BASE_URL;

// import qs from 'qs'
const http = new Request({
    baseURL: import.meta.env.VITE_BASE_URL, //设置请求的base url
    timeout: 30000, //超时时长30秒,
    header: {
        // 'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;',
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

//请求拦截器
http.interceptors.request.use(
    (config: any) => {
        // 可使用async await 做异步操作
        const token = uni.getStorageSync('token');
        config.header = config.header || {};
        config.header.accept = 'application/json, text/plain, */*';
        if (token) {
            config.header.common['Authorization'] = 'Bearer ' + token;
            config.header.post['Content-Type'] = 'application/json';
        }
        if (config.method === 'POST') {
            config.data = JSON.stringify(config.data) as unknown as Record<
                string,
                any
            >;
        }
        const timestamp = Math.floor(Date.now() / 1000).toString();
        config.header['authorization-date'] = timestamp;
        const time = (((parseInt(timestamp) * 2 + 2) * 3 + 6) * 12).toString();
        config.header['authorization-key'] = time.slice(-3) + time.slice(0, -3);
        return config;
    },
    (error: any) => {
        return Promise.resolve(error);
    },
);

// 响应拦截器
http.interceptors.response.use(
    (res: any) => {
        return res;
    },
    (error: any) => {
        console.log(error, 2222222);
        //未登录时清空缓存跳转
        if (error.statusCode == 401) {
            uni.clearStorageSync();
            uni.switchTab({
                url: '/pages/index/index.vue',
            });
        }

        const { errMsg } = error;

        console.log(errMsg, '我才是error');

        uni.showToast({
            title: errMsg,
            duration: 2000,
        });
        return Promise.resolve(error);
    },
);
export default http;
