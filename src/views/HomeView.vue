<script setup>
  import MyComponent from '@/components/MyComponent.vue'
  import { useCounterStore } from '@/stores/counter';
  import NavButton from '@/components/NavButton.vue';

  const store = useCounterStore();

  const bodyText = `<h3><b> This is doggy slot </b></h3>`
</script>

<template>
  <div class="home">
    <MyComponent prop1="Hello from App.vue" prop2="Hello again from App.vue" prop3="<i>This is prop3</i>">
      <template #kitten>
        <h1>This is kitten slot</h1>
      </template>
      <h2>This is default slot</h2>

      <template #doggy>
        <div v-html="bodyText"></div>
      </template>
      
      <h3>{{ store.count }}</h3>
      <NavButton
        @click="store.increment"
        buttonText="Increment Count"
      />
    </MyComponent>
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c9ced3;
  background-color: #2c3e50;
  margin-top: 10px;
}
</style>
