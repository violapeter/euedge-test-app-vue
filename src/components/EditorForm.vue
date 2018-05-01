<template>
  <form class="form">
    <TextField label="Name" id="name" type="text" />
    <TextField label="Job title" id="job" type="text" />
    <TextField label="Age" id="age" type="number" />
    <TextField label="Nickname" id="nickname" type="text" />
    <Checkbox id="addEmployee">Employee</Checkbox>
  </form>
</template>

<script>
import TextField from './TextField'
import Checkbox from './Checkbox'
export default {
  name: 'EditorForm',
  components: {Checkbox, TextField}
}
</script>

<style scoped>

</style>
