import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/common.scss'

import ElementPlus, { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'

import { router } from './router'
import { store } from './store'

const app = createApp(App)

app.provide('$msg', ElMessage)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
