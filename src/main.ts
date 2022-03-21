import { createApp } from 'vue'
import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import strollUI from './modules'
import './../icon/index.css'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'test',
    component: ()=> import('./test.vue')
  }
]
const router = createRouter({  
  history: createWebHistory(),  
  routes
})

createApp(App).use(router).use(strollUI).mount('#app')
