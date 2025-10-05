<template>
    <div>
        <h1>Users Page</h1>
        <p>User {{ mydata.name }}, is {{ mydata.maritalStatus }} and has {{ mydata.kids }} children</p>
    </div>
</template>

<script setup>
    import mydata from '@/assets/mydata.js'     // my personal object export
</script>