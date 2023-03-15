<template>
    <div class="card w-full bg-base-100 shadow-xl bg-gradient">
        <!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
        <div class="card-body">
            <h2 class="card-title text-secondary">
                {{ repo?.name }}
                <!-- <div class="badge badge-secondary">NEW</div> -->
            </h2>
            <p class="text-textGreen">{{ repo?.description || "No descripton" }}</p>
            <div class="card-actions justify-end">
                <router-link :to="{ name: 'repo-details', params: { name: repo?.name } }">
                    <div class="badge badge-outline border border-secondary badge-lg cursor-pointer p-4">View</div>
                </router-link>

                <!-- <div class="badge badge-outline">Products</div> -->
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    repo: Object,
    index: Number,
})

</script>