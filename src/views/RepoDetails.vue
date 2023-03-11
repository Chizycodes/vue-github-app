<template>
    <div>Details</div>
</template>

<script>
import axiosClient from "../axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

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
    },
};
</script>
