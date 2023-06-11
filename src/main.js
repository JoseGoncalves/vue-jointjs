import { createApp } from 'vue';

import App from '@/App.vue';
import RappidPlugin from '@/plugins/rappid';

const app = createApp(App);

app.use(RappidPlugin);

app.mount('#app');
