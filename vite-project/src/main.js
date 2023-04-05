import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 接收路由
import router from './router'
// 注册路由
createApp(App).use(router).mount('#app')
