<template>
    <div class="user-card">
        <h2>User Card</h2>
        <p>Name: {{ store.username }}</p>
        <p>Age: {{ store.age }}</p>
        <NavButton 
            buttonText="Change Name"
            @click="store.changeName"
        />
        <NavButton 
            buttonText="Increase Age"
            @click="store.changeAge"
        />
    </div>
</template>

<script setup>
    import myStorageFunction from '@/stores/myStorage.js'
    import NavButton from './NavButton.vue';

    const store = myStorageFunction()
</script>