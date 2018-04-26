<template>
  <svg
    :width="size | pixelate"
    :height="size | pixelate"
    viewBox="0 0 24 24"
    class="icon">
    <path :d="icon | getIcon"></path>
  </svg>
</template>

<script>
import icons from '../icons'
export default {
  name: 'Icon',
  props: {
    size: {
      default: 24,
      type: Number
    },
    icon: {
      type: String
    }
  },
  filters: {
    pixelate: num => `${num}px`,
    getIcon: icon => icons[icon]
  }
}
</script>
