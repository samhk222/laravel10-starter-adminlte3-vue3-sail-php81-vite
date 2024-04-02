import {createApp} from 'vue';
// import App from './App.vue';

// Vue.component('oi', require('./components/oi.vue').default);

import Oi from './components/oi.vue';

const app = createApp({});

app.component('oi', Oi);

app.mount("#app");
