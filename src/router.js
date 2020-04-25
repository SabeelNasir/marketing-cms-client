import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import routes from '@/routes/routes'
Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  routes
})

// Router Navigation Gaurd
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['auth/isLoggedIn']) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters['auth/isLoggedIn']) {
      next({
        name: 'dashboard',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});

export default router

