<template>
    <div class="border-b border-[#354651] w-full flex justify-center fixed z-50 bg-primary top-0">
        <div class="navbar bg-base-100 max-w-[1280px] px-5">
            <div class="flex-1">
                <router-link to="/" class="text-white normal-case text-xl font-bold"><span class="text-secondary">GitHub
                    </span>Repos</router-link>
            </div>
            <div class="flex-none gap-2">
                <!-- <div class="hidden md:block">
                    <SearchBar />
                </div> -->

                <!-- <div class="dropdown dropdown-end">
                    <label tabIndex="{0}" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="../assets/avatar.png" />
                        </div>
                    </label>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchBar from "./SearchBar.vue";
</script>