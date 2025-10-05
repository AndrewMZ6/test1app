<template>
    <slot></slot>
    <slot name="kitten"></slot>
    <em>{{ prop1 }}</em><br>
    <b>{{ prop2 }}</b><br>
    <div v-html="prop3">
    </div>
    <slot name="doggy"></slot>
</template>

<script setup>
    defineProps({
        prop1: String,
        prop2: {
            type: String,
            default: "I'm prop2. Hello!"
        },
        prop3: String,
    })
</script>