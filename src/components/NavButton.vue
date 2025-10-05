<template>
    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 focus:outline-hidden focus:bg-white/20 disabled:opacity-50 disabled:pointer-events-none">
        {{ buttonText }} 
    </button>
</template>

<script setup>
    defineProps({
        buttonText: {
            type: String,
            required: true
        }
    })
</script>