import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'
import Overviewp from 'src/components/Dashboard/Views/Dashboard/Overviewp.vue'

// Pages
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Fundinfo from 'src/components/Dashboard/Views/Pages/Fundinfo.vue'
import Home from 'src/components/Dashboard/Views/Pages/Home.vue'
import Survey from 'src/components/Dashboard/Views/Pages/Survey.vue'
import Surveyresult from 'src/components/Dashboard/Views/Pages/Surveyresult.vue'

// Purchase
import Purchase from 'src/components/Dashboard/Views/Purchase.vue'

// Redeem
import Redeem from 'src/components/Dashboard/Views/Redeem.vue'

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

let survey = {
  path: '/Survey',
  name: 'Survey',
  component: Survey
}

let surveyresult = {
  path: '/Surveyresult',
  name: 'Surveyresult',
  component: Surveyresult
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overviewp',
        name: 'Portfolio',
        component: Overviewp
      },
      {
        path: 'purchase',
        name: 'Puchase',
        component: Purchase
      },
      {
        path: 'redeem',
        name: 'Redeem',
        component: Redeem
      }
    ]
  },
  loginPage,
  fundinfoPage,
  homePage,
  survey,
  surveyresult,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Portfolio',
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
