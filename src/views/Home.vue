<template>
    <div class="">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">To fetch your repositories, simply enter your GitHub username and our app will do the
                        rest. It's that easy!</p>
                    <div class="form-control flex flex-row">
                        <input v-model="username" type="text" placeholder="Github username"
                            class="input input-bordered border-r-0 rounded-r-none border-secondary w-full" />
                        <button className="btn btn-primary rounded-l-none border-secondary bg-secondary text-primary hover:bg-secondary hover:text-primary hover:border-secondary" @click="handleClick">Get Repos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const router = useRouter();

const handleClick = () => {
    if (username.value === "") return;
    localStorage.setItem("git_username", username.value);
    router.push({ name: 'repo-list', params: { username: username.value } })
}

</script>