<template>
    <div>
        <h2>Coche</h2>
        <p>Marca: {{ brand }}</p>
        <p>Modelo: {{ model }}</p>
        <p>Potencia: {{ power }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        power: {
            type: Number,
            default: 60,
        }
    },
    setup(props) {
        const brand = "Audi";
        const model = "A4";

        console.log(props.power)

        return { brand, model }
    }
}
</script>

<style>

</style>