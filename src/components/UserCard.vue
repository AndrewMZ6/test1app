<template>
    <div class="user-card">
        <h2>User Card</h2>
        <p>Name: {{ store.$state.username }}</p>
        <p>Age: {{ store.$state.age }}</p>
        <p>Full name: {{ store.fullName }}</p>
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
    import NavButton from './NavButton.vue'

    const store = myStorageFunction()
</script>