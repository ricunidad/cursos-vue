import { createRouter, createWebHashHistory } from 'vue-router'

import isAuthenticateGuard from './auth-guard'

const routes = [
    { 
        path: '/',
        redirect: '/pokemon' 
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component:  () => import(/* webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layouts/PokeonLayout.vue'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage.vue') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage.vue') 
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage.vue'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? {id: 1} : { id }
                }
            },
            {
                path: '',
                redirect: { name : 'pokemon-home'}
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [isAuthenticateGuard],
        component:  () => import(/* webpackChunkName: "DBZLayout" */ '../modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            { 

                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DBZCharacters" */ '../modules/dbz/pages/Characters.vue') 
            },
            { 
                path: 'about', 
                name: 'dbz-about', 
                component: () => import(/* webpackChunkName: "DBZAbout" */ '../modules/dbz/pages/About.vue') 
            },
            {
                path: '',
                redirect: { name : 'dbz-characters'}
            }
        ]
    },

    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "404" */ '../modules/shared/pages/NoPageFound.vue') 
    },
  ]

const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// Guard Global - Sincrono
// router.beforeEach(( to, from, next ) => {
//     console.log({to, from, next});

//     const random = Math.random() * 100

//     if (random > 50) {
//         console.log('Autenticado')
//         next()
//     } else {
//         console.log(random, 'Bloqueado por beforeEach')
//         next({ name: 'pokemon-home' })
//     }
// })

// Guard Global - Asincrono
// const canAccess = () => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100

//         if (random > 50) {
//             console.log('Autenticado')
//             resolve(true)
//         } else {
//             console.log(random, 'Bloqueado por beforeEach')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async( to, from, next ) => {
//     const authorized = await canAccess()

//     authorized 
//         ? next()
//         : next({ name: 'pokemon-home' })
// })

export default router