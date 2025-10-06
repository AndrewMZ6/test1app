<template>
    <div>
        <h1>Blog Posts</h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
            <div v-for="post in posts" :key="post.id">
                <BlogPost :id="post.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import BlogPost from '@/components/BlogPost.vue';
    import { ref, onMounted } from 'vue';

    const posts = ref([]);

    onMounted(async () => {
        // Simulate fetching posts from an API
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            posts.value = data.slice(0, 6); // Limit to 6 posts for display
            } catch (error) {
            console.error('Error fetching posts:', error);
        }
    })
</script>