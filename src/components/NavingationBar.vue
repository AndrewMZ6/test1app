<template>
    <p>Current route is: {{ $route.fullPath }}</p>
    <RouterLink to="/">
        <button> Домой </button>
    </RouterLink>
    
    <RouterLink to="/about">
        <button>
            О нас
        </button>
    </RouterLink>
</template>