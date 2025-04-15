<script setup lang="ts">
import { ref } from 'vue';
// const props = defineProps<{ isSolt: boolean }>();
const emit = defineEmits(['get-back-url']);
const fileList = ref<any[]>([]);
const action: string =
    'https://ferry-fat.ccicftech.com:8002//api/ccic/uploadUrl';

function handleChange({ fileList: files }: any) {
    let data = fileList;
    let urlList: any = [];
    data.value.forEach((item: any) => {
        let url = JSON.parse(item.response).data;
        urlList.push(url);
    });
    emit('get-back-url', urlList);
    fileList.value = files;
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
            accept="image"
            image-mode="aspectFill"
            @change="handleChange"
            @success="handleSuccess"
        >
            <!-- <template #default> </template> -->
        </wd-upload>
    </view>
</template>
