import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'


import './css/style.css'

//VueSelect
// import VueSelect from 'vue-select'
// import "vue-select/dist/vue-select.css";
// app.component('v-select', VueSelect)
//VueSelect
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
