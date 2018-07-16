import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const EXTERNAL_LINK = 'https://mock-now-server-ojjpfycdme.now.sh/login'

export default {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  mutations: {
    setIsLoggedIn (state) {
      console.log('test')
      state.isLoggedIn = true
    }
  },
  actions: {
    login ({ commit }, {login, password}) {
      return axios.post(EXTERNAL_LINK, {
        login,
        password
      })
        .then((response) => {
          if (response.data.success) {
            commit('setIsLoggedIn')

            return {
              login
            }
          }

          throw new Error('Invalid credentials')
        })
    }
  }
}
