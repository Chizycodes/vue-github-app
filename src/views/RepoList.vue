<template>
  <div v-if="loading" class="flex justify-center mt-10">
    <div class="">Loading...</div>
  </div>
  <div v-else>
    <div class="w-full flex justify-center">
      <div class="md:max-w-[400px] w-full">
        <SearchBar />
      </div>
    </div>
    <div class="flex flex-wrap justify-between gap-5 w-full mt-10">
      <RepoCard v-for="(repo, index) in repos" :key="repo.id" :index="index" :repo="repo" />
    </div>
    <div>
      <!-- Pagination -->
      <div class="flex justify-center mt-10">
        <div class="flex gap-10">
          <div @click="decreament" class="btn btn-ghost btn-circle border border-secondary">&lt;&lt;</div>
          <div @click="increament" class="btn btn-ghost btn-circle border border-secondary">&gt;&gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";
import RepoCard from "../components/RepoCard.vue";
import SearchBar from "../components/SearchBar.vue";
import { useRoute } from "vue-router";

const repos = ref([]);
const currentPage = ref(1);
const route = useRoute();
const loading = ref(true);

const fetchRepos = async () => {
  loading.value = true;
  await axiosClient
    .get(`/users/${route.params.username}/repos?page=${currentPage.value}&per_page=${10}`)
    .then((res) => {
      console.log(res.data, "repos");
      repos.value = res.data;
      loading.value = false;
      // console.log()
    })
    .catch((err) => {
      const error = err.response.data.message;
      console.log(error);
      loading.value = false;
    });
}

const increament = () => {
  if (repos.value.length < 10) return;
  currentPage.value += 1;
  // console.log(currentPage.value);
}

const decreament = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
  // console.log(currentPage.value);
}

onMounted(() => {
  fetchRepos();
});

watch(currentPage, () => {
  fetchRepos();
})

</script>