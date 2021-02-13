export default [
  {
    name: 'Dashboard',
    icon: 'ti-panel',
    collapsed: false,
    children: [{
      name: 'Overview',
      path: '/admin/overview'
    }]
  },
  {
    name: 'Pages',
    icon: 'ti-gift',
    children: [{
      name: 'Login Page',
      path: '/login'
    },
    {
      name: 'Fund information Page',
      path: '/fundinfo'
    },
    {
      name: 'Home Page',
      path: '/home'
    }
    ]
  }
]