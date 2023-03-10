<template>
    <div class="">
        <RepoCard v-for="(repo, index) in repos" :key="repo.id" :index="index" :repo="repo" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import RepoCard from "../components/RepoCard.vue";

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