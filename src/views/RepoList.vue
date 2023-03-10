<template>
    <div class="">
        {{ repos }}
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const repos = ref([]);

onMounted(() => {
    axiosClient.get("/chizycodes/repos").then(res => {
        console.log(res.data);
        repos.value = res.data;
    }).catch(err => {
        console.log(err)
    })
})
</script>

<style scoped></style>