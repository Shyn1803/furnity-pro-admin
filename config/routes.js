export default [
  {
    path: '/admin',
    layout: false,
    routes: [
      {
        path: '/admin',
        routes: [
          {
            name: 'login',
            path: '/admin/login',
            component: './admin/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'smile',
    component: './Dashboard',
  },
  {
    path: '/product',
    name: 'product',
    icon: 'smile',
    component: './Admin/Product/Products',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
