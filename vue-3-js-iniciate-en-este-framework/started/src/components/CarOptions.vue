<template>
<div>
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

  <p>Potencia: {{ power }}</p>
  <!--<p>Potencias</p>
  <ul>
    
      <template v-for="(power, index) in powers" :key="index">
          <li v-if="power < 280">Urbana: {{ power }}</li>
          <li v-else-if="power == 280">Hibrido: {{ power }}</li>
          <li v-else >Carrera: {{ power }}</li>
      </template>
  </ul> -->

  <!-- {{ mensaje.title }} - {{ mensaje.text }} -->

  <button @click="upPower(50)">Aumentar</button>
  <button @click="downPower(50)">Disminuir</button>
  </div>
</template>

<script>
export default {
    data( ) {
        return {
        brand : "VMW",
        model : "B56",
        colors : ["Azul", "Rojo", "Verde"],
        price : 38000,
        power: 60,
        // powers : [60, 80, 120, 160, 200, 280, 300, 390, 540, 500],
        mensaje : {
                title: "Estoy bien",
                text: "Adios"
            }
        }
    },
    methods: {
        upPower(newPower){
            console.log("Aumentando potencia -> ")
            this.power = this.power + newPower;
        }, 

        downPower(newPower){
            console.log("Disminuir potencia -> ")
            this.power = this.power - newPower;
        }, 
    }
}
</script>

<style>

</style>