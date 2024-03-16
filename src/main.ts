import { createApp } from 'vue'
// import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './assets/fonts/index.css';
import './css/style.css'

createApp(App).use(store).use(router).mount('#app');

