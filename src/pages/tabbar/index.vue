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
                    <!-- <template #icon>
                        <wd-icon name="call" size="22px"></wd-icon>
                    </template> -->
                </wd-tabbar-item>
                <wd-tabbar-item
                    title="爱心卡"
                    name="wode"
                    icon="heart"
                ></wd-tabbar-item>
                <wd-tabbar-item
                    title="我的"
                    name="user"
                    icon="user"
                ></wd-tabbar-item>
            </wd-tabbar>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import home from '../index/index.vue';
import user from '@/pages/user/index.vue';
import wode from '@/pages/wode/index.vue';
const tabbar = ref('home');
</script>

<style lang="scss" scoped>
:deep(.wd-tabbar) {
    z-index: 10 !important;
    height: 170rpx !important; // 设置 tabbar 的总体高度
    .wd-badge__content {
        border: none !important;
    }
}

:deep(.home_tabbar) {
    height: 170rpx !important; // 设置 tabbar 的总体高度
    padding-bottom: 10rpx !important;
    box-sizing: border-box;
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
        font-size: 23rpx;
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
        color: #30c6ff;
        line-height: 34rpx;
        text-align: left;
        font-style: normal;
    }
}
</style>
