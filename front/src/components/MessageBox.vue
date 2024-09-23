<template>
  <div class="main-container">
    <div class="message-box-container">
      <div v-for="message in messages" :key="message.id">
        <UserMessage :message="message" v-if="message.type === 'USER'" />
        <SysMessage :message="message" v-else />
      </div>
      <div class="blank-space"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserMessage from "./UserMessage.vue";
import SysMessage from "./SysMessage.vue";

export default {
  name: "MessageBox",
  components: {
    UserMessage,
    SysMessage,
  },
  data() {
    return {};
  },
  methods: {
    addInitialMessage(message) {
      this.$store.dispatch("addInitialMessage", message);
    },
  },
  computed: {
    ...mapState(["messages"]),
  },
  mounted() {
    setTimeout(() => {
      this.addInitialMessage({
        id: 1,
        type: "SYS",
        value: "Bonjour, indiquer le nom ou l'id du client pour commencer",
      });
    }, 1000);
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 70px; /* Offset for the fixed navbar */
  margin-bottom: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px); /* Full height minus navbar and input panel */
  overflow-y: auto;
}
.message-box-container {
  /* padding: 1rem; */
  width: 700px;
  height: 100%;
}
.blank-space {
  height: 100px;
}
</style>
