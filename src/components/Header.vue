<template>
  <div class="header">
    <h1>Persons</h1>
    <Button appearance="primary" icon="add">Add person</Button>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'Header',
  components: {Button}
}
</script>

<style scoped>
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
