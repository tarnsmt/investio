import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'

// Pages
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Fundinfo from 'src/components/Dashboard/Views/Pages/Fundinfo.vue'
import Home from 'src/components/Dashboard/Views/Pages/Home.vue'

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let fundinfoPage = {
  path: '/fundinfo',
  name: 'Fundinfo',
  component: Fundinfo
}

let homePage = {
  path: '/home',
  name: 'Home',
  component: Home
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  loginPage,
  fundinfoPage,
  homePage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
