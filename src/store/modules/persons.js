import persons from '../../api/persons'

export default {
  state: {
    persons: []
  },
  mutations: {
    addPerson (state, { person }) {
      state.persons.push(person)
    },

    removePerson (state, { id }) {
      state.persons = state.persons.filter(person => person.id !== id)
    }
  }
}
