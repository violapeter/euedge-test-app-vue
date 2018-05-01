<template>
    <div>
      <h2>Data dump</h2>
      <VueJsonPretty class="data-dump" :data="data" />
    </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
export default {
  name: 'DataDump',
  props: {
    data: { type: Object }
  },
  components: {VueJsonPretty}
}
</script>

<style scoped>
  .data-dump {
    border: 2px solid #ddd;
    border-radius: 2px;
    padding: 20px;
  }
</style>
