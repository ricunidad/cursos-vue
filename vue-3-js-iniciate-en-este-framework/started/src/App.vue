<template>
  <h1>Vue JS</h1>
  <h1>API  de Opciones</h1>
  <CarOptions />
  <hr/>
  <h1>Composition API</h1>
  <CarComposition />
</template>

<script>
import CarComposition from './components/CarComposition.vue'
import CarOptions from './components/CarOptions.vue';

export default {
  components: {
    CarOptions,
    CarComposition,
  }
}
</script>

<style>

</style>