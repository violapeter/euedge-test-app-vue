import persons from '../persons'

export default {
  getPersons (cb) {
    setTimeout(() => cb(persons), 100)
  }
}
