<template>
    <div>
        <h1>Blog Posts</h1>
        <div v-if="!loading" class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
            <div v-for="post in posts" :key="post.id">
                <BlogPost :id="post.id" />
            </div>
        </div>
        <div v-else class="mt-20 text-center">
             <div class="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>
        </div>
    </div>
</template>

<script setup>
    import BlogPost from '@/components/BlogPost.vue';
    import { ref, onMounted } from 'vue';

    const posts = ref([]);
    const loading = ref(true);

    onMounted(async () => {
        // Simulate fetching posts from an API
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            posts.value = data.slice(0, 6); // Limit to 6 posts for display
            } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            loading.value = false;
        }
    })
</script>