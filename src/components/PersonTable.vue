<template>
    <table class="table">
        <PersonTableHead></PersonTableHead>
        <tbody>
            <PersonRow
                v-for="(person, index) in sortedPersons(sortType, sortOrder)"
                :key="index"
                :id="index"
                :name="person.name"
                :job="person.job"
                :age="person.age"
                :nick="person.nick"
                :employee="person.employee"></PersonRow>
        </tbody>
    </table>
</template>

<script>
import PersonTableHead from './PersonTableHead'
import PersonRow from './PersonRow'
import { mapGetters } from 'vuex'
export default {
  name: 'PersonTable',
  components: {PersonRow, PersonTableHead},
  computed: mapGetters({
    sortedPersons: 'sortedPersons',
    sortType: 'sortType',
    sortOrder: 'sortOrder'
  }),
  created () {
    this.$store.dispatch('getAllPersons')
  }
}
</script>

<style scoped>
    .table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }
</style>
