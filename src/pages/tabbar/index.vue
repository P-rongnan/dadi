<script lang="ts" setup>
import { ref } from 'vue';
import home from '../index/index.vue';
import user from '@/pages/user/index.vue';
import wode from '@/pages/wode/index.vue';

const tabbar = ref('home');
</script>
<template>
    <view class="contain">
        <view class="content">
            <home v-if="tabbar == 'home'"></home>
            <wode v-if="tabbar == 'wode'"></wode>
            <user v-if="tabbar === 'user'"></user>
        </view>
        <view class="tabbar">
            <wd-tabbar v-model="tabbar" custom-class="home_tabbar" fixed>
                <wd-tabbar-item title="客服" icon="service" name="home">
                    <template #icon>
                        <image
                            v-if="tabbar == 'home'"
                            class="imgImage"
                            src="@/static/icon/top4.png"
                            mode="scaleToFill"
                        />
                        <image
                            v-else
                            class="imgImage"
                            src="@/static/icon/top3.png"
                            mode="scaleToFill"
                        />
                    </template>
                </wd-tabbar-item>
                <wd-tabbar-item
                    custom-class="home_tabbar"
                    title="爱心卡"
                    name="wode"
                >
                    <template #icon>
                        <image
                            v-if="tabbar == 'wode'"
                            class="imgImage"
                            src="@/static/icon/top4.png"
                            mode="scaleToFill"
                        />
                        <image
                            v-else
                            class="imgImage"
                            src="@/static/icon/top3.png"
                            mode="scaleToFill"
                        />
                    </template>
                </wd-tabbar-item>
                <wd-tabbar-item title="我的" name="user">
                    <template #icon>
                        <image
                            v-if="tabbar == 'user'"
                            class="imgImage"
                            src="@/static/icon/top4.png"
                            mode="scaleToFill"
                        />
                        <image
                            v-else
                            class="imgImage"
                            src="@/static/icon/top3.png"
                            mode="scaleToFill"
                        />
                    </template>
                </wd-tabbar-item>
            </wd-tabbar>
        </view>
    </view>
</template>
<style lang="scss" scoped>
:deep(.wd-tabbar) {
    z-index: 10 !important;
    height: 170rpx !important; // 设置 tabbar 的总体高度
    .wd-badge__content {
        border: none !important;
    }
}

:deep(.home_tabbar) {
    width: 100%;
    height: 170rpx !important; // 设置 tabbar 的总体高度
    padding-bottom: 10rpx !important;
    box-sizing: border-box;
    .imgImage {
        width: 50rpx;
        height: 50rpx;
        // width: 100%;

        // height: 100%;
    }
}
:deep(.wd-tabbar-item) {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.5) 0%,
        #ffffff 100%
    );
    backdrop-filter: blur(5px);
    .wd-tabbar-item__body-title {
        font-family:
            PingFangSC,
            PingFang SC;
        font-weight: 500;
        font-size: 24rpx;
        line-height: 34rpx;
        margin-top: 15rpx;
        text-align: left;
        font-style: normal;
    }

    .is-active {
        font-family:
            PingFangSC,
            PingFang SC;
        font-weight: 600;
        font-size: 26rpx;
        color: #30c6ff;
        line-height: 34rpx;
        text-align: left;
        font-style: normal;
    }
}
</style>
