import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.css'

import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog/Blog'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import NavigationDrawer from '@/components/common/NavigationDrawer'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-nav-drawer', NavigationDrawer)

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page - Sarkunan',
        metaTags: [
          {
            name: 'description',
            content: 'Home page of the site'
          }
        ]
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        title: 'Portfolio - Sarkunan',
        metaTags: [
          {
            name: 'description',
            content: 'Portfolio page'
          }
        ]
      }
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    }
  ]
})
