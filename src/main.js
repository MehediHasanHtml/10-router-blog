import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'

import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './style.css'
createApp(App).use(router).mount('#app')