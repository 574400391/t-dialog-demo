import { createApp } from 'vue';
import TDesign from 'tdesign-mobile-vue';
import Demo from './demo.vue';
// import router from './router.js'

import './index.css';

const app = createApp(Demo);

app.use(TDesign).mount('#app');
