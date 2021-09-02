<template>
    <div>
        <!-- <router-link :to="{name: 'home'}" >Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {id: '64'}}">Pokemon por id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <CustomLink 
            v-for="link in links" 
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name:'Pokemons' },
                { to: 'pokemon-id', name:'Por ID', id: 134 },
                { to: 'pokemon-about', name:'About' },
                { to: 'dbz-characters', name:'DBZ Personajes' },
                { to: 'dbz-about', name:'DBZ About' },
                { to: 'https://www.google.com', name:'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scope>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    margin: 0 10px;
    color: #404040;
}

/* div a.router-link-exact-active{
    color: #42b983;
} */
</style>