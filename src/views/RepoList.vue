<template>
  <div class="w-full flex justify-center">
    <div class="md:max-w-[400px] w-full">
        <SearchBar />
    </div>
  </div>
  <div class="flex flex-wrap justify-between gap-5 w-full mt-10">
    <RepoCard
      v-for="(repo, index) in repos"
      :key="repo.id"
      :index="index"
      :repo="repo"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import RepoCard from "../components/RepoCard.vue";
import SearchBar from "../components/SearchBar.vue";

const repos = ref([]);

const fetchRepos = async() => {
  await axiosClient
    .get("/users/chizycodes/repos")
    .then((res) => {
      console.log(res.data);
      repos.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchRepos();
});
</script>