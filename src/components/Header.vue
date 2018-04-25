<template>
  <div class="header">
    <h1>Persons</h1>
    <Button appearance="primary" icon="add">Add person</Button>
    <Checkbox id="valami"></Checkbox>
  </div>
</template>

<script>
import Button from './Button'
import Checkbox from './Checkbox'
export default {
  name: 'Header',
  components: {Checkbox, Button}
}
</script>

<style scoped>
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
