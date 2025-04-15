<script setup lang="ts">
import Many_upload from '@/components/uploadMany.vue';
import { ref } from 'vue';
const Myupload = ref<InstanceType<typeof Many_upload> | null>(null);
const successUrlList = ref<any>(null);
const isSolt = ref<boolean>(true);
function sendImg() {
    console.log(3333);
    console.log(successUrlList, 444);
}
function getBackUrl(item: any) {
    successUrlList.value = item;
    console.log(successUrlList);
}
</script>
<template>
    <view class="content">
        <!-- <image class="logo" src="@/static/home/home1.png" /> -->
        <view
            style="
                width: 100%;
                height: 600rpx;
                background-color: #ccc;
                margin-top: 200rpx;
            "
        ></view>
        <view
            class="btn"
            style="
                width: 100%;
                padding: auto;
                text-align: center;
                margin-top: 100rpx;
            "
        >
            <Many_upload
                ref="Myupload"
                :is-solt="isSolt"
                @get-back-url="getBackUrl"
            >
                <view style="width: 160rpx; height: 160rpx"></view>
            </Many_upload>

            <wd-button @click="sendImg">上传附件1</wd-button>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.content {
    width: 1005;
    height: 90vh;
    background-color: #ebfaff;
    .logo {
        width: 100%;
        height: 90vh;
    }
}
</style>
