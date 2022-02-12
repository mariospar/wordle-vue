import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import store from "./store"
import App from './App.vue';

createApp(App).use(store).mount('#app');

registerSW();
