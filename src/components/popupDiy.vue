<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{ show: boolean }>();
const Emits = defineEmits<{
    (e: 'update:show', value: boolean): void;
}>();
const show = ref<boolean>(props.show);
console.log(Emits);
watch(
    () => props.show,
    (newVal) => {
        show.value = newVal;
    },
);
function handleClose() {
    show.value = false;
    Emits('update:show', false);
}
</script>
<template>
    <view class="custom-picker">
        <wd-popup v-model="show" position="center" @close="handleClose">
            <view class="popupbox">
                <view class="imgage">
                    <image
                        style="width: 80%; height: 90%"
                        src="@/static/icon/top.png"
                        mode="scaleToFill"
                    />
                </view>
            </view>
        </wd-popup>
    </view>
</template>

<style scoped lang="scss">
.custom-picker {
    .popupbox {
        width: 670rpx;
        height: 620rpx;
        position: relative;
        background: #ccc;
        .imgage {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
