import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

// import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {},
    id: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    users: [],
    friends: [],
    history: [],
    transfer: [],
    detailfriends: {},
    uploads: {},
    updateuser: {},
    pagination: null
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
      state.id = payload.id
    },
    SET_ID (state, payload) {
      state.users = payload
    },
    SET_FRIENDS (state, payload) {
      state.friends = payload
    },
    SET_HISTORY (state, payload) {
      state.history = payload
    },
    SET_TRANSFER (state, payload) {
      state.transfer = payload
    },
    SET_DETAILFRIENDS (state, payload) {
      state.detailfriends = payload
    },
    SET_UPLOADS (state, payload) {
      state.uploads = payload
    },
    SET_UPDATEUSER (state, payload) {
      state.updateuser = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  actions: {
    register (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('ini', payload)
        axios.post('http://localhost:5000/v1/users/register/', payload)
          .then((res) => {
            const result = res.data.result
            console.log(result)
            console.log('isi result login', result)
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            context.commit('SET_USER', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/v1/users/login', payload)
          .then((res) => {
            const result = res.data.result
            console.log('isi result login', result)
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            context.commit('SET_USER', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getbyId (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/v1/users/${localStorage.getItem('id')}`, payload)
          .then((res) => {
            const result = res.data.result[0]
            console.log('isi get by id', result)
            context.commit('SET_ID', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // getFriendsById (context) {
    //   return new Promise((resolve, reject) => {
    //     axios.get(`http://localhost:5000/v1/users/friends/${localStorage.getItem('id')}`)
    //       .then((res) => {
    //         const result = res.data.result
    //         console.log('isi get by id', result)
    //         context.commit('SET_FRIENDS', result)
    //         resolve(result)
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   })
    // },
    getFriendsById (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/v1/users/friends/${localStorage.getItem('id')}?firstName=${payload.search}&page=${payload.noPage}`)
          .then((res) => {
            const result = res.data.result
            console.log('isi get by id', result)
            context.commit('SET_FRIENDS', result.users)
            context.commit('SET_PAGINATION', result.pagination)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getHistory (context) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/v1/transaction/transactionhistory/${localStorage.getItem('id')}`)
          .then((res) => {
            const result = res.data.result
            console.log('history', result)
            context.commit('SET_HISTORY', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    transfer (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/v1/transaction', payload)
          .then((res) => {
            const result = res.data.result
            console.log('transfer', result)
            context.commit('SET_TRANSFER', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getDetailfriendsbyId (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/v1/users/' + payload.idTransfer)
          .then((res) => {
            const result = res.data.result
            console.log(result[0])
            context.commit('SET_DETAILFRIENDS', result[0])
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateImages (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(`http://localhost:5000/v1/users/${localStorage.getItem('id')}`, payload)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_UPLOADS', result)
            resolve(result)
          })
          .catch((err) => {
            reject((err))
          })
      })
    },
    updateUser (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch('http://localhost:5000/v1/users/', payload)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_UPDATEUSER', result)
            resolve(result)
          })
          .catch((err) => {
            reject((err))
          })
      })
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    isLogin (state) {
      return state.token !== null
    },
    getUsers (state) {
      return state.users
    },
    getFriends (state) {
      return state.friends
    },
    getHistory (state) {
      return state.history
    },
    getTransfer (state) {
      return state.transfer
    },
    getDetailfriendsbyId (state) {
      return state.detailfriends
    },
    updateuser (state) {
      return state.updateuser
    },
    getPagination (state) {
      return state.pagination
    }
  },
  modules: {
  }
})
