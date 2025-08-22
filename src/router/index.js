import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import MarchaDetail from '@/components/MarchaDetail.vue'
import MarchaList from '@/components/MarchaList.vue'
import MarchaSearch from '@/components/MarchaSearch.vue'
import AutorDetail from '@/components/AutorDetail.vue'
import AutorList from '@/components/AutorList.vue'
import AutorSearch from '@/components/AutorSearch.vue'
import BandaDetail from '@/components/BandaDetail.vue'
import BandaList from '@/components/BandaList.vue'
import BandaSearch from '@/components/BandaSearch.vue'
import DiscoDetail from '@/components/DiscoDetail.vue'
import DiscoList from '@/components/DiscoList.vue'
import DiscoSearch from '@/components/DiscoSearch.vue'

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/marcha', name: 'marchaSearch', component: MarchaSearch },
  { path: '/marcha/:id', name: 'marchaDetail', component: MarchaDetail },
  { path: '/marcha/search/:name', name: 'marchaList', component: MarchaList },
  { path: '/autor', name: 'autorSearch', component: AutorSearch },
  { path: '/autor/:id', name: 'autorDetail', component: AutorDetail },
  { path: '/autor/search/:name', name: 'autorList', component: AutorList },
  { path: '/banda', name: 'bandaSearch', component: BandaSearch },
  { path: '/banda/:id', name: 'bandaDetail', component: BandaDetail },
  { path: '/banda/search/:name', name: 'bandaList', component: BandaList },
  { path: '/disco', name: 'discoSearch', component: DiscoSearch },
  { path: '/disco/:id', name: 'discoDetail', component: DiscoDetail },
  { path: '/disco/search/:name', name: 'discoList', component: DiscoList },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
})

export { router };