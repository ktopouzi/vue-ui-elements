<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    text: {
      type: String,
      default: "Button text",
    },
  },
};
</script>

<style></style>
