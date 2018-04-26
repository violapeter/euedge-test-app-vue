<template>
    <table class="table">
        <PersonTableHead></PersonTableHead>
        <tbody>
            <PersonRow
                v-for="person in sortedPersons"
                :key="person.name"
                :name="person.name"
                :job="person.job"
                :age="person.age"
                :nick="person.nick"
                :employee="person.employee"></PersonRow>
        </tbody>
    </table>
</template>

<script>
import * as enums from '../enums'
import PersonTableHead from './PersonTableHead'
import PersonRow from './PersonRow'
export default {
  name: 'PersonTable',
  components: {PersonRow, PersonTableHead},
  props: {
    persons: {
      default: () => [],
      required: true,
      type: Array
    },
    sortType: {
      default: enums.NAME,
      required: true,
      validator: type => [...Object.values(enums)].includes(type)
    },
    sortOrder: {
      default: enums.ASC,
      required: true,
      validator: order => [enums.ASC, enums.DESC].includes(order)
    }
  },
  computed: {
    sortedPersons: (sortType, sortOrder) => {
      console.log(this.persons)
      this.persons.sort((personA, personB) => {
        const a = personA[sortType]
        const b = personB[sortType]

        switch (typeof a) {
          case 'string':
            const x = a.toLowerCase()
            const y = b.toLowerCase()
            return x < y ? -1 : x > y ? 1 : 0
          case 'number':
            return a - b
          case 'boolean':
            return (a === b) ? 0 : b ? -1 : 1
        }
      })[sortOrder === enums.DESC ? 'reverse' : 'map'](x => x)
    }
  },
  created () {
    this.$store.dispatch('getPersons')
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
