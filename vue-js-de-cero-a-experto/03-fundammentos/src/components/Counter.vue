<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
      <button v-on:click="increase">+1</button>
      <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
    // props: ['title', 'start'],
    props: {
        title: String,
        start: {
            type: Number,
            default: 10,
            //required: true,
            validator(value){
                return value > 100
            }
        },
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            console.log("getSquareValue")
            return this.counter * this.counter
        },
        increase() {
            this.counter ++;
        },
        decrease() {
            this.counter --;
        }
    },
    computed: {
        squareCounter(){
            console.log("squareCounter")
            return this.counter * this.counter
        },
        customTitle(){
            return this.title ? this.title : 'Counter'
        }
    },
}
</script>

<style>

</style>