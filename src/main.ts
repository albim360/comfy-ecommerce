import { createApp } from 'vue';
import App from "./App.vue";
import './assets/sass/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "../store/store.js";

const app = createApp(App);

app.use(store);

app.mount('#app');
