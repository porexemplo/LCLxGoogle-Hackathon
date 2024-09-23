import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import router from "./router";
import store from "./store";

import "primeicons/primeicons.css";
import "@/assets/css/global.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Chip from "primevue/chip";
import Avatar from "primevue/avatar";

const app = createApp(App);

app.use(store);
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "",
      cssLayer: false,
    },
  },
});

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Chip", Chip);
app.component("Avatar", Avatar);

app.mount("#app");
