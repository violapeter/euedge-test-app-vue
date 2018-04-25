<template>
    <button :class="[appearance]">
      <slot></slot>
    </button>
</template>

<script>
const BUTTON_TYPES = ['primary', 'secondary', 'tertiary']

export default {
  name: 'Button',
  props: {
    appearance: {
      default: 'primary',
      validator: val => [...BUTTON_TYPES].includes(val)
    }
  },
  computed: {
    classes: {
      isPrimary: 'primary'
    }
  }
}
</script>

<style scoped>
  button {
    align-items: center;
    background: none;
    border: none;
    color: currentColor;
    display: flex;
    letter-spacing: 1px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
    padding: 10px 15px;
  }

  button.primary {
    background: #6554C0;
    border-radius: 3px;
    color: #fff;
  }

  button.primary:hover {
    background: #8777D9;
  }

  button.secondary {
    background: transparent;
    border-radius: 3px;
    box-shadow: inset 0 0 0 2px #6554C0;
    color: #6554C0;
  }

  button.secondary:hover {
    background: #8777D9;
    box-shadow: none;
    color: #fff;
  }
</style>
