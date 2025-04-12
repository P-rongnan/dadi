<template>
    <view class="contain">
        <image class="bgcImg" src="../../static/back.jpg" mode="scaleToFill" />
        <view class="con">
            <view class="content rounded-lg">
                <view class="title text-3xl text-teal-500 my-4"> Sign In </view>
                <view class="ip-info">
                    <view class="inps">
                        <wd-input
                            v-model="form.username"
                            type="text"
                            placeholder="请输入用户名"
                        />
                    </view>
                    <view class="inps">
                        <wd-input
                            v-model="form.password"
                            clearable
                            show-password
                            type="text"
                            placeholder="请输入密码"
                        />
                    </view>
                    <view class="input-container">
                        <wd-input
                            v-model="form.code"
                            type="text"
                            placeholder="请输入验证码"
                        >
                        </wd-input>
                        <button class="get-code-button" @click="getCaptchas">
                            <image
                                style="z-index: 999; width: 100%; height: 100%"
                                :src="ImageImg"
                                mode="scaleToFill"
                            />
                        </button>
                    </view>
                </view>
                <view class="btns">
                    <button
                        class="bg-violet-300 w-auto rounded-lg text-zinc-50"
                        @click="login"
                    >
                        登录
                    </button>
                </view>

                <view class="desc">
                    <text>
                        Don't have an account?
                        <text class="text-violet-500"> Sign Up </text>
                    </text>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup name="login">
import { reactive, ref, onMounted } from 'vue';
import { getCaptcha } from '@/api/common/user/user';
import { useAuthStore } from '@/state/modules/user';
import { useRouter } from 'uni-mini-router';
const router = useRouter();
const authStore = useAuthStore();
let ImageImg = ref('');
const form = reactive({
    username: 'admin',
    password: '@dddsDdjk888!',
    code: '',
    uuid: '',
    loginType: 0,
    rememberMe: false,
});
onMounted(() => {
    getCaptchas();
});
// 获取验证码
function getCaptchas() {
    getCaptcha().then((res) => {
        ImageImg.value = res.data.data;
        form.uuid = res.data.id;
    });
}
// login登录
function login() {
    authStore.login(form).then((res) => {
        console.log('aaaa', res);
        if (res) {
            uni.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000,
            });
            router.push({
                name: 'index',
            });
        } else {
            uni.showToast({
                title: '登录失败',
                icon: 'none',
                duration: 2000,
            });
        }
    });
}
</script>

<style lang="scss" scoped>
.contain {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .bgcImg {
        width: 100%;
        height: 100vh;
    }

    .con {
        width: 100%;
        height: 100%;
        background: rgb(0 0 0 / 40%);

        .content {
            position: absolute;
            top: 200px;
            right: 30rpx;
            left: 30rpx;
            padding: 30rpx;
            box-sizing: border-box;
            background: #fff;

            .title {
                width: 100%;
                text-align: center;
            }

            .ip-info {
                margin-bottom: 50rpx;
                .inps {
                    padding: 20rpx;
                    box-sizing: border-box;
                }
                .input-container {
                    display: flex;
                    padding: 20rpx;
                    box-sizing: border-box;
                }
                .get-code-button {
                    width: 45%;
                    height: 100rpx;
                    border: none;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
            }

            .btns {
                margin-bottom: 30rpx;
            }

            .desc {
                text-align: center;
            }
        }
    }
}
</style>
