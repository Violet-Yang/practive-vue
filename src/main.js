import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Form } from 'vee-validate'
import { AgGridVue } from 'ag-grid-vue3'
import './styles/index.css'
import { createI18n } from 'vue-i18n'
import messages from './locales'

// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>",
// });

const i18 = new createI18n({
  legacy: false, // set 'false' to use Composition API
  locale: 'ko',
  messages,
})

const app = createApp(App)

app.component('VeeForm', Form)
app.component('AgGrid', AgGridVue)

app.use(store)
app.use(router)
app.use(i18)
app.provide(i18, '$t')
app.mount('#app')
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
