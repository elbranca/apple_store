import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/fonts/index.css';
import './css/style.css'

createApp(App).use(store).mount('#app')
