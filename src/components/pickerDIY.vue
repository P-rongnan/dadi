<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
const Emits = defineEmits<{
    (e: 'get-diycolumns-value', value: any): void;
}>();
const keyword = ref<any>('');
const showList = ref<any>([]);
const show = ref<boolean>(false);
const value = ref<any>('');
const indexList = [
    {
        index: 'A',
        data: [
            '阿坝',
            '阿拉善',
            '阿里',
            '安康',
            '安庆',
            '鞍山',
            '安顺',
            '安阳',
            '澳门',
        ],
    },
    {
        index: 'B',
        data: [
            '北京',
            '白银',
            '保定',
            '宝鸡',
            '保山',
            '包头',
            '巴中',
            '北海',
            '蚌埠',
            '本溪',
            '毕节',
            '滨州',
            '百色',
            '亳州',
        ],
    },
];
// 监听 props 的变化
onMounted(() => {
    handleSearch();
});

function handleSearch() {
    showList.value = [];
    nextTick(() => {
        if (keyword.value) {
            showList.value = indexList.filter((item: any) => {
                return item.data.some((city: any) => {
                    return city.includes(keyword.value);
                });
            });
        } else {
            showList.value = indexList;
        }
    });
}
function handleClose() {
    show.value = false;
}
function handleClear() {
    keyword.value = '';
    handleSearch();
}
function handleClick(index: string, city: string) {
    value.value = city;
    keyword.value = '';
    Emits('get-diycolumns-value', city);
    show.value = false;
}
function openClick() {
    handleSearch();
    show.value = true;
}
</script>
<template>
    <view>
        <wd-picker v-model="value" clearable use-default-slot>
            <template #default>
                <view class="newOption" @click.stop="openClick()">
                    <view v-if="!value" class="picker_left placeholder"
                        >请选择宠物品种</view
                    >
                    <view class="picker_left">{{ value }}</view>
                    <view class="picker_right"
                        ><image
                            style="width: 100%; height: 100%"
                            src="@/static/icon/rightjian.png"
                            mode="scaleToFill"
                    /></view>
                </view>
            </template>
        </wd-picker>
        <view class="custom-picker">
            <wd-popup
                v-model="show"
                custom-style="height: 700px"
                :close-on-click-modal="false"
                position="bottom"
            >
                <view class="popupbox">
                    <view class="popupboxTitle"
                        ><image
                            class="imgbig"
                            src="@/static/icon/top1.png"
                            mode="scaleToFill"
                        />
                        <view class="bigClose" @click.stop="handleClose()">
                            <image
                                class="imgbigClose"
                                src="@/static/icon/top2.png"
                                mode="scaleToFill"
                            />
                        </view>
                    </view>
                    <wd-search
                        v-model="keyword"
                        placeholder-left
                        placeholder="请输入宠物品种进行搜索"
                        cancel-txt="搜索"
                        @cancel="handleSearch"
                        @clear="handleClear"
                    />
                    <view class="wraper">
                        <wd-index-bar v-if="showList.length" sticky>
                            <view v-for="item in showList" :key="item.index">
                                <wd-index-anchor :index="item.index" />
                                <wd-cell
                                    v-for="city in item.data"
                                    :key="city"
                                    border
                                    clickable
                                    :title="city"
                                    @click="handleClick(item.index, city)"
                                ></wd-cell>
                            </view>
                        </wd-index-bar>
                    </view>
                </view>
            </wd-popup>
        </view>
    </view>
</template>
<style lang="scss" scoped>
:deep(.newOption) {
    width: 100%;
    height: 90rpx;
    background: #e8f9ff;
    border-radius: 15rpx;
    padding: 21rpx 31rpx;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .placeholder {
        color: gray; /* Placeholder color */
        font-size: 28rpx; /* Placeholder font size */
    }
    .picker_right {
        width: 50rpx;
        height: 50rpx;
    }
}
.popupbox {
    width: 100%;
    height: 700rpx !important;
    text-align: left;
    .popupboxTitle {
        width: 100%;
        height: 180rpx;
        position: relative;
        .bigClose {
            position: absolute;
            right: 0;
            top: 0rpx;
            width: 50rpx;
            height: 50rpx;
            .imgbigClose {
                width: 100%;
                height: 100%;
            }
        }
        .imgbig {
            width: 100%;
            height: 100%;
            background-color: honeydew;
        }
    }
    :deep(.wraper) {
        height: calc(100vh - var(--window-top));
        height: calc(
            100vh - var(--window-top) - constant(safe-area-inset-bottom)
        );
        height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
    }
}
</style>
