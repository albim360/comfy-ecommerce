import { createApp } from 'vue';
import App from '../src/App.vue';
import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "../store/store";

const app = createApp(App);

app.use(store);

app.mount('#app');
