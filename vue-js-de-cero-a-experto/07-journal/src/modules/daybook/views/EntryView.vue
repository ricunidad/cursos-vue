<template>
  <div class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">02</span>
          <span class="mx-1 fs-3">Septiembre</span>
          <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
      </div>

      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea
      v-model="entry.text"
        placeholder="¿Qué sucedió hoy?"
      ></textarea>
  </div>

  <Fab
    icon="far fa-save"
  />

  <img 
    src="https://i.pinimg.com/564x/e0/f6/bf/e0f6bf6d56518e1e7499e2c793a1f7fb.jpg" 
    alt="entry-picture"
    class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters} from 'vuex'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            entry: null
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
    },
    methods: {
        loadEntry(){
            const entry = this.getEntryById(this.id)
            if (!entry) this.$router.push({ name: 'no-entry' })

            this.entry = entry
        }
    },
    created() {
        this.loadEntry()
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;

}
</style>