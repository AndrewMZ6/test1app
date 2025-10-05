<template>
    <p>Current route is: </p> <h3><b>{{ $route.fullPath }}</b></h3>
    <RouterLink to="/">
      <NavButton buttonText="Главная" />
    </RouterLink>
    
    <RouterLink to="/about">
        <NavButton buttonText="О нас" />
    </RouterLink>

    <RouterLink to="/users">
        <NavButton buttonText="Узерс" />
    </RouterLink>

    <RouterLink to="/concrete">
        <NavButton buttonText="Конкретный узер" />
    </RouterLink>
</template>


<script setup>
import NavButton from './NavButton.vue';


</script>