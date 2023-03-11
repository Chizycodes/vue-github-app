<template>
    <div class="relative">
        <Nav />
        <main class="flex justify-center w-full mt-[100px] mb-20">
            <div class="w-full max-w-[1000px] mx-5">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup>
import Nav from './Nav.vue';
</script>
