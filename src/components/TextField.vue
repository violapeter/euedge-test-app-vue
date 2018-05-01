<template>
  <fieldset class="fieldset">
    <label :for="id">{{ label }}</label>
    <input
      @change="$emit('change', $event.target)"
      @input="$emit('input', $event.target)"
      @keyup="$emit('keyup', $event.target)"
      :id="id"
      :type="type"
      class="input"/>
  </fieldset>
</template>

<script>
const TEXT_FIELD_TYPES = ['text', 'number', 'email', 'password', 'search', 'tel', 'url']
export default {
  name: 'TextField',
  props: {
    id: {
      required: true,
      type: String
    },
    type: {
      validator: val => [...TEXT_FIELD_TYPES].includes(val)
    },
    label: String
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
