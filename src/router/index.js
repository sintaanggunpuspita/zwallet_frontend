import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/main/Dashboard.vue'
import Addphone from '../views/main/Addphone.vue'
import Changepassword from '../views/main/Changepassword.vue'
import Changepin from '../views/main/Changepin.vue'
import Confirmation from '../views/main/Confirmation.vue'
import Confirmationpinblank from '../views/main/Confirmationpinblank.vue'
import History from '../views/main/History.vue'
import Home from '../views/main/Home.vue'
import Homepressed from '../views/main/Homepressed.vue'
import Managephone from '../views/main/Managephone.vue'
import Personalinfo from '../views/main/Personalinfo.vue'
import Pinblank from '../views/main/Pinblank.vue'
import Profile from '../views/main/Profile.vue'
import Searchreceiver from '../views/main/Searchreceiver.vue'
import Success from '../views/main/Success.vue'
import Topup from '../views/main/Topup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addphone',
    name: 'Addphone',
    component: Addphone
  },
  {
    path: '/changepassword',
    name: 'Changepassword',
    component: Changepassword
  },
  {
    path: '/changepin',
    name: 'Changepin',
    component: Changepin
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },
  {
    path: '/confirmationpinblank',
    name: 'Confirmationpinblank',
    component: Confirmationpinblank
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'addphone',
        name: 'Addphone',
        component: Addphone
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'managephone',
        name: 'Managephone',
        component: Managephone
      },
      {
        path: 'changepassword',
        name: 'Changepassword',
        component: Changepassword
      },
      {
        path: 'confirmation',
        name: 'Confirmation',
        component: Confirmation
      },
      {
        path: 'homepressed',
        name: 'Homepressed',
        component: Homepressed
      },
      {
        path: 'personalinfo',
        name: 'Personalinfo',
        component: Personalinfo
      },
      {
        path: 'pinblank',
        name: 'Pinblank',
        component: Pinblank
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'searchreceiver',
        name: 'Searchreceiver',
        component: Searchreceiver
      },
      {
        path: '/success',
        name: 'Success',
        component: Success
      },
      {
        path: '/Topup',
        name: 'Topup',
        component: Topup
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
