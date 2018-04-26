<template>
  <div class="header">
    <h1>Persons</h1>
    <Button appearance="primary" icon="add">
        <Icon icon="add"></Icon> Add person
    </Button>
  </div>
</template>

<script>
import Button from './Button'
import Checkbox from './Checkbox'
import Icon from './Icon'
export default {
  name: 'Header',
  components: {Icon, Checkbox, Button}
}
</script>

<style scoped>
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
