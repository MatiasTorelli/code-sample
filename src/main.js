import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
import { en } from '@/assets/i18n/en'

import 'css/base.css'

const i18nMessages = {
  en
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: i18nMessages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: '####' }
}, router)

app.mount('#app')
