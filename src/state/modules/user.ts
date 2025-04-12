import { defineStore } from 'pinia';
import { loginA } from '@/api/common/user/user';

interface AuthState {
    token?: string;
    user: Record<string, any>;
}
// 存token和个人信息
export const useAuthStore = defineStore({
    id: 'userInfo',
    state: (): AuthState => ({
        token: undefined,
        user: {},
    }),
    getters: {
        isLogin(): boolean {
            return this.token !== undefined;
        },
    },
    actions: {
        // 登录
        login(info: any) {
            return new Promise<any>((resolve) => {
                loginA(info).then((res: any) => {
                    console.log(res.data, 'nnnnnn');

                    if (res.data.code == 200) {
                        this.token = res.data.token;
                        this.user = {
                            name: info.username,
                            passWord: info.password,
                        };
                        const flag: boolean = true;
                        resolve(flag);
                    } else {
                        const flag: boolean = false;
                        resolve(flag);
                    }
                });
            });
        },
        layout() {
            this.token = undefined;
            this.user = {};
        },
    },
    // 本地持久化存储
    persist: {
        storage: {
            getItem: uni.getStorageSync,
            setItem: uni.setStorageSync,
        },
    },
});
