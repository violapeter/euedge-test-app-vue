<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    class="icon">
    <path d={icons[props.icon]} />
  </svg>
</template>

<script>
import icons from 'icons'
export default {
  name: 'Icon',
  props: ['size', 'icon', ]
}
</script>

<style scoped>

</style>
