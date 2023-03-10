<template>
    <div class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
      <div class="card-body">
        <h2 class="card-title">
          {{ repo?.name }}
          <!-- <div class="badge badge-secondary">NEW</div> -->
        </h2>
        <p>{{ repo?.description || "No descripton" }}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">View</div> 
          <!-- <div class="badge badge-outline">Products</div> -->
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    repo: Object,
    index: Number,
})
</script>