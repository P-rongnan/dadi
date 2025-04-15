<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{ columns: any }>();
const Emits = defineEmits<{
    (e: 'get-columns-value', value: any): void;
}>();
const value = ref<any>(props.columns[0] || '');

function handleConfirm({ value: selectedValue }: { value: any }) {
    Emits('get-columns-value', selectedValue);
    value.value = selectedValue;
}
function clearValue() {
    Emits('get-columns-value', '');
}
</script>
<template>
    <view>
        <wd-picker
            v-model="value"
            clearable
            use-default-slot
            custom-class="customclass"
            :columns="props.columns"
            @confirm="handleConfirm"
            @clear="clearValue"
        >
            <template #default>
                <view class="newOption">
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
    .picker_right {
        width: 50rpx;
        height: 50rpx;
    }
}
</style>
