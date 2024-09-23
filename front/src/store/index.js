import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    messages: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async sendMessage({ state }, message) {
      state.messages.push(message);
      const response = await axios.post("http://localhost:3000/send", {
        message: message.value,
      });

      if (response.data) {
        console.log(response.data);
        state.messages.push({
          value: response.data.reply,
          type: "SYS",
        });
      }
    },
    addInitialMessage({ state }, message) {
      state.messages = [message, ...state.messages];
    },
  },
  modules: {},
});
