<template>
  <fieldset class="fieldset">
    <label :for="id">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-on="listeners"
      :id="id"
      :type="type"
      class="input"/>
  </fieldset>
</template>

<script>
const TEXT_FIELD_TYPES = ['text', 'number', 'email', 'password', 'search', 'tel', 'url']
export default {
  name: 'TextField',
  inheritAttrs: false,
  props: {
    id: {
      required: true,
      type: String
    },
    type: {
      validator: val => [...TEXT_FIELD_TYPES].includes(val)
    },
    label: String
  },
  computed: {
    listeners () {
      return { ...this.$listeners }
    }
  }
}
</script>

<style scoped>
  .fieldset {
    border: 0;
    margin: 0 0 20px;
    padding: 0;
  }

  .input {
    border: 2px solid #ddd;
    border-radius: 2px;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    outline: 0;
    padding: 5px 10px;
    width: 100%;
  }

  .input:focus {
    border-color: #6554C0;
  }
</style>
