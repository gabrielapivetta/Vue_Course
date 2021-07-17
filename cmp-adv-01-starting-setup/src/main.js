import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue'

const app = createApp(App);

//registering components globally can be heavy for bigger applications since the browser has to load them all initially
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
