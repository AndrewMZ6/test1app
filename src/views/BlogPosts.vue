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

    const posts = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
    ]
</script>