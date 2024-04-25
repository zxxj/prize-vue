import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"

createApp(App).use(Antd).use(Particles, {
	init: async (engine) => {
		await loadSlim(engine)
	}
}).mount('#app')
