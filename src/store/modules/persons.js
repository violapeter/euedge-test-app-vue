import personsApi from '../../api/persons'
import * as enums from '../../enums'

export default {
  state: {
    persons: [],
    sortType: enums.NAME,
    sortOrder: enums.ASC
  },
  mutations: {
    addPerson (state, { person }) {
      state.persons.push(person)
    },

    removePerson (state, { id }) {
      state.persons = state.persons.filter(person => person.id !== id)
    },

    setPersons (state, persons) {
      state.persons = persons
    }
  },
  actions: {
    getAllPersons ({ commit }) {
      personsApi.getPersons(persons => {
        commit('setPersons', persons)
      })
    }
  },
  getters: {
    allPersons: state => state.persons,
    sortOrder: state => state.sortOrder,
    sortType: state => state.sortType,
    sortedPersons: state => (sortType, sortOrder) =>
      state.persons.sort((personA, personB) => {
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
}
