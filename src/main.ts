import { createApp } from 'vue'
import App from './app.component.vue'
import { router } from './router.module'

const app = createApp(App).use(router)
app.mount('#app')