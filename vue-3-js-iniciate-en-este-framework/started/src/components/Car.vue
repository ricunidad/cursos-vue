<template>
  <h2>Coche</h2>
  <p>Marca: {{ brand }}</p>
  <p>Modelo: {{ model }}</p>
  <p>Color: 
        <!-- <span v-for="(color, index) in colors" :key="index">
            {{ index }}: {{ color }} -
        </span> -->
  </p>
  <ul>
      <li v-for="(color, index) in colors" :key="index">
          {{ index + 1 }}: {{ color }}
      </li>
  </ul>
  <p>Precio: {{ price }} $</p>
  <p>Potencias Urbanas (menor a 300 CV)</p>
  <ul>
      <!-- <li v-for="(power, index) in powers" :key="index">
          <template v-if="power < 300">
              {{ power }}
          </template>
      </li> -->
      <template v-for="(power, index) in powers" :key="index">
          <li v-if="power < 300">
              {{ power }}
          </li>
      </template>
  </ul>
  <p>Potencias Urbanas (mayor a 300 CV)</p>
  <ul>
      <!-- <li v-for="(power, index) in powers" :key="index">
          <template v-if="power < 300">
              {{ power }}
          </template>
      </li> -->
      <template v-for="(power, index) in powers" :key="index">
          <li v-if="power >= 300">
              {{ power }}
          </li>
      </template>
  </ul>

  <p>Potencias</p>
  <ul>
      <template v-for="(power, index) in powers" :key="index">
          <li v-if="power < 280">Urbana: {{ power }}</li>
          <li v-else-if="power == 280">Hibrido: {{ power }}</li>
          <li v-else >Carrera: {{ power }}</li>
      </template>
  </ul>

  {{ mensaje.title }} - {{ mensaje.text }}
</template>

<script>
export default {
    // data( ) {
    //     return {
    //         brand: "Audi",
    //         model: "A4",
    //         color: ["Azul", "Rojo", "Verde"],
    //         price: 38000,
    //         power: 180,
    //         mensaje: {
    //             title: "Hola mundo",
    //             text: "Adios"
    //         }
    //     }
    // }

    setup() {
        const brand = "Audi";
        const model = "A4";
        const colors = ["Azul", "Rojo", "Verde"];
        const price = 42000;
        const powers = [60, 80, 120, 160, 200, 280, 300, 390, 540, 500];
        const mensaje = {
                title: "Estoy bien",
                text: "Adios"
            }

        return { brand, model, colors, price, powers, mensaje }
    }
}
</script>

<style>

</style>