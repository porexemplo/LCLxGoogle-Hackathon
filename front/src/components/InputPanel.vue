<template>
  <div class="input-panel-container">
    <div class="input-text">
      <Textarea
        id="prompt"
        v-model="value"
        placeholder="Entrez votre message"
        style="width: 700px; height: 100px"
      />
      <Button
        class="send-btn"
        icon="pi pi-send"
        @click="sendMessage"
        :disabled="!value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputPanel",
  components: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("sendMessage", {
        type: "USER",
        value: this.value,
      });
      this.value = "";
      // scroll to bottom smoothly
      this.$nextTick(() => {
        const container = document.querySelector(".main-container");
        container.scrollTop = container.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.p-button {
  background-color: rgb(0, 17, 210);
  border: rgb(34, 42, 129);
}

.input-panel-container {
  position: fixed;
  bottom: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 100;
  background-color: white;
}

.input-text {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  /* margin-right: 1rem; */
}

.send-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
