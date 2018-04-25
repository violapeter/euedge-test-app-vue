<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
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
