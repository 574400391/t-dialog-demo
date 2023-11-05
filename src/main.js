import { createApp } from 'vue'
import TDesign from 'tdesign-mobile-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(TDesign).use(router).mount('#app')
