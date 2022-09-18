import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Form } from 'vee-validate'
import './styles/index.css'

// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>",
// });

const app = createApp(App)

app.component('VeeForm', Form)

app.use(store)
app.use(router)
app.mount('#app')
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
