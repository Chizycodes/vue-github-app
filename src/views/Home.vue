<template>
    <div class="">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-xl">
                    <div class="flex justify-center mb-5"><img src="../assets/github.svg" alt="github"></div>
                    <h1 class="text-white normal-case text-4xl md:text-7xl font-bold"><span class="text-secondary">GitHub
                        </span>Repos</h1>
                    <p class="pt-6 text-sm md:text-base">To fetch your repositories, simply enter your GitHub username and our app will do the
                        rest. It's that easy!</p>
                        <p class="text-sm">You can try it with my username: <span class="text-secondary">Chizycodes</span> </p>
                    <div class="form-control mt-6 flex flex-row">
                        <input v-model="username" type="text" placeholder="Github username"
                            class="input input-bordered border-r-0 rounded-r-none border-secondary w-full" />
                        <button
                            className="btn btn-primary rounded-l-none border-secondary bg-secondary text-primary hover:bg-secondary hover:text-primary hover:border-secondary"
                            @click="handleClick">Get Repos</button>
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