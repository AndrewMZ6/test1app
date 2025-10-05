<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ store.count }}</h3>
    <NavButton 
      @click="store.increment"
      buttonText="Increment Count"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: block;
    align-items: center;
  }
}
</style>


<script setup>
  import { useCounterStore } from '@/stores/counter';
  import NavButton from '@/components/NavButton.vue';

  const store = useCounterStore();
</script>