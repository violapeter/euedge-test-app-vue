import Vue from 'vue'
import Vuex from 'vuex'
import persons from './modules/persons'
import ui from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { persons, ui }
})
