<script setup lang="ts">
import { ref } from 'vue';
// const props = defineProps<{ successurl: any }>();
const emit = defineEmits(['get-back-url']);
const fileList = ref<any[]>([]);
const action: string =
    'https://ferry-fat.ccicftech.com:8002//api/ccic/uploadUrl';
function handleChange({ fileList: files }: any) {
    fileList.value = files;
    let data = fileList;
    let urlList: any = '';
    data.value.forEach((item: any) => {
        urlList = JSON.parse(item.response).data;
    });
    emit('get-back-url', urlList);
}
function handleSuccess() {
    uni.showToast({
        title: '上传成功',
        icon: 'success',
        duration: 2000,
    });
}
</script>
<template>
    <view>
        <wd-upload
            :file-list="fileList"
            :action="action"
            :limit="1"
            accept="image"
            image-mode="aspectFill"
            @change="handleChange"
            @success="handleSuccess"
        >
            <slot></slot>
        </wd-upload>
    </view>
</template>
