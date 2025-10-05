<template>
    <p>Current route is: </p> <h3><b>{{ $route.fullPath }}</b></h3>
    <RouterLink v-for="route in routeUrls" :to="route.url" :key="route.url">
        <NavButton :buttonText="route.text" />
    </RouterLink>
</template>


<script setup>
import NavButton from './NavButton.vue';

const routeUrls = [
    {
        url: "/",
        text: "Главная"
    },
    {
        url: "/about",
        text: "О нас"
    },
    {
        url: "/users",
        text: "Узерс"
    },
    {
        url: "/concrete",
        text: "Конкретный узер"
    }
]
</script>