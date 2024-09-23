<template>
  <div class="message-container">
    <Chip :label="message.value" />
  </div>
</template>

<script>
export default {
  name: "UserMessage",
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
  justify-content: flex-end;
  margin-bottom: 0.2rem;
}
</style>
