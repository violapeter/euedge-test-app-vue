<template>
  <form class="form">
    <TextField label="Name" id="name" type="text" @input="updateField" />
    <TextField label="Job title" id="job" type="text" @input="updateField" />
    <TextField label="Age" id="age" type="number" @input="updateField" />
    <TextField label="Nickname" id="nick" type="text" @input="updateField" />
    <Checkbox id="employee" @change="updateField">Employee</Checkbox>
  </form>
</template>

<script>
import TextField from './TextField'
import Checkbox from './Checkbox'
import { mapMutations } from 'vuex'
export default {
  name: 'EditorForm',
  components: {Checkbox, TextField},
  methods: {
    ...mapMutations(['modifyPerson']),
    updateField (event) {
      this.modifyPerson({
        field: event.target.id,
        value: event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>
