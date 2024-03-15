import { createApp } from 'vue'
import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './assets/fonts/index.css';
import './css/style.css'
import HomeLayout from './layout/index';

// createApp(App).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app');

