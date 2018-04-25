<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet">
    <Header></Header>
    <PersonRow job="valami" name="valami" employee age="44"></PersonRow>
  </div>
</template>

<script>
import Header from './components/Header'
import PersonRow from './components/PersonRow'

export default {
  name: 'App',
  components: {
    PersonRow,
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

  #app {
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 20px;
  }
</style>
