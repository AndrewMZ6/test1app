<template>
    <div>
        <h1>Blog Posts</h1>
        <div v-for="post in posts" :key="post.id">
            <BlogPost :id="post.id" />
        </div>
    </div>
</template>

<script setup>
    import BlogPost from '@/components/BlogPost.vue';

    const posts = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
</script>