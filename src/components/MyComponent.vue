<template>
    <slot></slot>
    <slot name="kitten"></slot>
    <em>{{ prop1 }}</em><br>
    <b>{{ prop2 }}</b><br>
    <div v-html="prop3">
    </div>
    <slot name="doggy"></slot>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <CardComponent 
            :title="data ? data.title : 'Loading...'"
            :description="data ? 'Completed: ' + data.completed : 'Fetching data from API...'"
            :linkText="data ? 'View Task #' + data.id : 'Loading...'"
         />
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import CardComponent from './CardComponent.vue';

    
    defineProps({
        prop1: String,
        prop2: {
            type: String,
            default: "I'm prop2. Hello!"
        },
        prop3: String,
    })

    const data = ref(null);
    onMounted(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
            data.value = response.data;
            console.log('Fetched data:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    })
</script>