<template>
  <div class="message-container">
    <div class="avatar-container">
      <Avatar icon="pi pi-shield" shape="circle" />
    </div>
    <div class="text-container">
      {{ message.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SysMessage",
  components: {},
  data() {
    return {};
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.message-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  max-width: 80%;
}

.avatar-container {
  margin-right: 1rem;
}

.text-container {
  background-color: #f0f0f040;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
}
</style>
