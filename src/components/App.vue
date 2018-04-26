<template>
  <div id="app">
    <Header></Header>
    <PersonTable v-bind:persons="persons" v-bind:sort-order="enums.ASC" sort-type="name"></PersonTable>
  </div>
</template>

<script>
import * as enums from '../enums'
import persons from '../persons'
import Header from './Header'
import PersonRow from './PersonRow'
import PersonTableHead from './PersonTableHead'
import PersonTable from './PersonTable'

export default {
  name: 'App',
  data: () => ({ persons, enums }),
  components: {
    PersonTable,
    PersonTableHead,
    PersonRow,
    Header
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
