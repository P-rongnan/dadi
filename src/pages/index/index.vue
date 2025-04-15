<script setup lang="ts">
import Only_upload from '@/components/uploadMany.vue';
import picker_Index from '@/components/pickerIndex.vue';
import picker_Diy from '@/components/pickerDIY.vue';
import popup_Diy from '@/components/popupDiy.vue';

import { ref, reactive } from 'vue';
const Myupload = ref<InstanceType<typeof Only_upload> | null>(null);
const successUrlA = ref<any>(null);
const form = ref();
const showPopupDiy = ref<boolean>(false);
const columns = ref([
    '选项1',
    '选项2',
    '选项3',
    '选项4',
    '选项5',
    '选项6',
    '选项7',
    '选项8',
    '选项9',
    '选项10',
]);
const model = reactive<any>({
    value: '选项1',
    diyValue: '',
});
function getBackUrl(item: any) {
    successUrlA.value = item;
    // console.log(successUrlA);
}
function getColumnsValue(item: any) {
    model.value = item;
    console.log(model, 2222);
}
function getDiyColumnsValue(item: any) {
    model.diyValue = item;
    console.log(model, 2222);
}
function handleSubmit() {
    form.value
        .validate()
        .then(({ valid }: { valid: any }) => {
            if (valid) {
                console.log(model.value);
                console.log(model, 222);
                console.log(valid, 3333);
            }
        })
        .catch((error: any) => {
            console.log(error, 'error');
        });
}
function openPopup() {
    showPopupDiy.value = true;
}
</script>
<template>
    <view class="content">
        <!-- <image class="logo" src="@/static/home/home1.png" /> -->
        <view
            style="
                width: 100%;
                height: 100rpx;
                background-color: #ccc;
                margin-top: 100rpx;
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
            <Only_upload ref="Myupload" @get-back-url="getBackUrl">
                <view style="width: 160rpx; height: 160rpx">
                    <image
                        style="width: 100%; height: 100%"
                        src="@/static/image/top.jpg"
                        mode="scaleToFill"
                    />
                </view>
            </Only_upload>
            <view class="itemselecte" style="width: 100%; height: 600rpx">
                <wd-form ref="form" :model="model">
                    <wd-cell-group>
                        <view class="cellgroup">宠物品种</view>
                        <view>
                            <picker_Index
                                :columns="columns"
                                @get-columns-value="getColumnsValue"
                            ></picker_Index
                        ></view>
                    </wd-cell-group>
                    <wd-cell-group>
                        <view class="cellgroup">宠物品种</view>
                        <view>
                            <picker_Diy
                                :columns="columns"
                                @get-diycolumns-value="getDiyColumnsValue"
                            ></picker_Diy
                        ></view>
                    </wd-cell-group>
                    <view class="footer">
                        <wd-button
                            type="primary"
                            size="large"
                            block
                            @click="handleSubmit"
                            >提交</wd-button
                        >
                    </view>
                </wd-form>
            </view>
            <wd-button @click="openPopup">默认按钮</wd-button>
            <popup_Diy v-model:show="showPopupDiy"></popup_Diy>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.content {
    width: 1005;
    height: 90vh;
    background: #f1fbff;
    .logo {
        width: 100%;
        height: 90vh;
    }
    .itemselecte {
        width: 100%;
        height: 700rpx;
        padding: 54rpx;
        box-sizing: border-box;
        .cellgroup {
            height: 60rpx;
            font-family:
                PingFangSC,
                PingFang SC;
            font-weight: 600;
            font-size: 31rpx;
            color: #333333;
            line-height: 42rpx;
            text-align: left;
            font-style: normal;
            background-color: #f1fbff;
        }
    }

    .footer {
        padding: 12px;
    }
}
</style>
