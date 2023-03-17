<template>
    <div v-if="loading" class="flex justify-center mt-10">
        <div class="">Loading...</div>
    </div>
    <div v-else class="w-full mt-5">
        <div class="card bg-gradient bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="card-title uppercase text-secondary font-bold text-[24px]">{{ repo?.name }}</h1>

                <div class="mt-10">
                    <div class="flex flex-col gap-8">
                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] mr-20 col-span-2">Description</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.description || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Language</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.language || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Created At</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.created_at &&
                                moment(repo?.created_at).format("MMMM Do YYYY, h:mm:ss a") || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Updated At</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.updated_at &&
                                moment(repo?.updated_at).format("MMMM Do YYYY, h:mm:ss a") || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Pushed At</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.pushed_at &&
                                moment(repo?.pushed_at).format("MMMM Do YYYY, h:mm:ss a") || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Homepage</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.homepage || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Size</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.size || "-" }}</p>
                        </div>

                        <div class="grid sm:grid-cols-6 grid-cols-1 gap-2 items-start">
                            <h2 class="text-textGreen font-bold text-[18px] col-span-2">Stargazers Count</h2>
                            <p class="text-textGreen col-span-4">{{ repo?.stargazers_count }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import moment from "moment"

export default {
    setup() {
        const route = useRoute();

        const repo = ref([]);

        const fetchRepo = async () => {
            await axiosClient
                .get(`/repos/chizycodes/${route.params.name}`)
                .then((res) => {
                    console.log(res.data, "repo");
                    repo.value = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        onMounted(() => {
            fetchRepo();
        });

        return { repo, moment };
    },
};
</script>
