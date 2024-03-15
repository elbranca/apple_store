import { createRouter, createWebHistory } from 'vue-router'
// import { HomeLayout } from '../layout/index';
import SecondPage from '@/components/SecondPage.vue';
import HomeLayout from '@/layout/HomeLayout.vue';
import Home from '@/components/Home.vue';


const routes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    redirect: '/',
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  { path: '/second', name: 'SecondPage', component: SecondPage}
]
const router = createRouter({ history: createWebHistory(), routes })
export default router
