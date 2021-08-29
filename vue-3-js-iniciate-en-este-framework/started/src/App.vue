<template>
  <h1>Vue JS</h1>
  <Car :power="power" :upPower="upPower" @downPower="downPower" />
</template>

<script>
import Car from './components/Car.vue';
import { ref } from 'vue';

export default {
  components: {
    Car,
  },
  setup() {
    let power = ref(30);

    const upPower = () => {
      power.value ++;
    }

    const downPower = () => {
      power.value --;
    }

    return { power, upPower, downPower }
  }
}
</script>

<style>

</style>