import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog/Blog'

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
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        title: 'Blog - Sarkunan',
        metaTags: [
          {
            name: 'description',
            content: 'Blog page'
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
