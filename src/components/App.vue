<template>
  <div id="app">
    <Header></Header>
    <PersonTable v-bind:persons="persons" v-bind:sort-order="enums.ASC" sort-type="name"></PersonTable>
    <Dialog
      title="Add person"
      primary-label="Add"
      secondary-label="Cancel"
      :opened="isAddDialogOpen"
      @onPrimary="addPerson"
      @close="closeAddDialog">
      <EditorForm></EditorForm>
    </Dialog>
    <Dialog
      title="Are you sure you want to delete it?"
      primary-label="Yes"
      secondary-label="Cancel"
      :opened="isDeleteDialogOpen"
      @onPrimary="removePerson"
      @close="closeDeleteDialog"></Dialog>
    <DataDump :data="person"></DataDump>
  </div>
</template>

<script>
import * as enums from '../enums'
import persons from '../persons'
import Header from './Header'
import PersonRow from './PersonRow'
import PersonTableHead from './PersonTableHead'
import PersonTable from './PersonTable'
import DataDump from './DataDump'
import Dialog from './Dialog'
import EditorForm from './EditorForm'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  data: () => ({ persons, enums }),
  components: {
    Dialog,
    PersonTable,
    PersonTableHead,
    PersonRow,
    Header,
    EditorForm,
    DataDump
  },
  methods: {
    ...mapMutations(['closeAddDialog', 'closeDeleteDialog', 'removePerson', 'addPerson'])
  },
  computed: {
    ...mapGetters(['person', 'isAddDialogOpen', 'isDeleteDialogOpen'])
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

  :root {
      background: #fefefe;
  }

  #app {
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 20px;
  }
</style>
