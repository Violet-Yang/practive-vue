import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>",
// });

const app = createApp(App);

console.log(router);

app.use(store);
app.use(router);
app.mount("#app");
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
