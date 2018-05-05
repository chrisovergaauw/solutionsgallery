import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showcase: 1,
    sketch: 'maze'
  },
  mutations: {
    showcase (state, bool) {
      state.showcase = bool
    },
    sketch (state, challenge) {
      state.sketch = challenge
    }
  }
})

export default store
