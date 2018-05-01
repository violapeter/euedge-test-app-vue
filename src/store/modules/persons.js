import personsApi from '../../api/persons'
import * as enums from '../../enums'

const sortPersons = (persons, sortBy, isAscending) =>
  persons
    .map((x, index) => ({
      sortBy: (sortBy === 'name' || sortBy === 'nick') && x[sortBy]
        ? x[sortBy]['toLowerCase']()
        : sortBy === 'age'
          ? parseInt(x[sortBy]) || 0
          : sortBy === 'employee'
            ? x[sortBy] ? 1 : 0
            : x,
      index
    }))
    .sort((x, y) => x.sortBy < y.sortBy ? -1 : x.sortBy > y.sortBy ? 1 : 0 || x.index - y.index)
    .map(x => persons[x.index])[isAscending ? 'map' : 'reverse'](x => x)

export default {
  state: {
    persons: [],
    sortType: enums.NAME,
    isAscending: true,
    selectedToDelete: false,
    lastAdded: {}
  },
  mutations: {
    addPerson (state, { person }) {
      state.persons.push(person)
    },
    removePerson (state) {
      if (state.selectedToDelete !== false) {
        state.persons = state.persons.filter((person, index) => index !== state.selectedToDelete)
        state.selectedToDelete = false
      }
    },
    selectToDelete (state, { id }) {
      state.selectedToDelete = id
    },
    setPersons (state, persons) {
      state.persons = persons
    },
    sortBy (state, payload) {
      state.sortType = payload.type
      state.isAscending = !payload.isAscending
      state.persons = sortPersons(state.persons, payload.type, !payload.isAscending)
    }
  },
  actions: {
    getAllPersons ({ state, commit }) {
      personsApi.getPersons(persons => {
        commit('setPersons', sortPersons(persons, state.sortType, state.isAscending))
      })
    }
  },
  getters: {
    allPersons: state => state.persons,
    isAscending: state => state.isAscending,
    sortType: state => state.sortType,
    lastAdded: state => state.lastAdded
  }
}
