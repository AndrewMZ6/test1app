<template>
    <div class="user-card">
        <h2>User Card</h2>
        <p>Name: {{ store.username }}</p>
        <p>Age: {{ store.age }}</p>
        <button @click="store.changeName">Change Name</button>
        <button @click="store.changeAge">Increase Age</button>
    </div>
</template>

<script setup>
    import myStorageFunction from '@/stores/myStorage.js'

    const store = myStorageFunction()
</script>