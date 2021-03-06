<template>
  <button class="text-red-300">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    /*
     * The button text
     */
    text: {
      type: String,
      default: "Button text",
    },
  },
};
</script>

<style></style>
