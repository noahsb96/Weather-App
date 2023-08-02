import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
