import { createStore } from 'vuex'
import { moduleA } from './module/moduleA'
import { moduleB } from './module/moduleB'

export const store = createStore({
  modules: {
    moduleA,
    moduleB
  }
})