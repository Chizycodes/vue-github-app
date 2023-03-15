<template>
  <div class="form-control">
    <input v-model="searchQuery" type="text" placeholder="Search by repo name"
      class="input input-bordered border-secondary" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

</script>