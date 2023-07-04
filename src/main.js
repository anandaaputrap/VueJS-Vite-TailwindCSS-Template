import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'

import './css/style.css'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
