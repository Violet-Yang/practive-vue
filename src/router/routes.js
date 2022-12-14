// const Home = () => import(/* webpackChunkName : "Hone" */ "../views/Home");

const Error = () =>
  import(/* webpackChunkName : "Error" */ '../views/ErrorPage')

const Login = () => import(/* webpackChunkName : "Login" */ '../views/Login')

const ReceivingManage = () =>
  import(/* webpackChunkName : "ReceivingManage" */ '../views/receiving/manage')

const ReceivingInspect = () =>
  import(
    /* webpackChunkName : "ReceivingInspect" */ '../views/receiving/inspect'
  )

const ReceivingConfirm = () =>
  import(
    /* webpackChunkName : "ReceivingConfirm" */ '../views/receiving/confirm'
  )

const ShippingVehicle = () =>
  import(/* webpackChunkName : "ShippingVehicle" */ '../views/shipping/vehicle')

const ShippingDelivery = () =>
  import(
    /* webpackChunkName : "ShippingDelivery" */ '../views/shipping/delivery'
  )

const routes = [
  // {
  //   path: "/",
  //   name: "Root",
  //   component: Home,
  // },
  {
    path: '/error',
    name: 'Error',
    meta: { authRequired: false, layout: 'Clear' },
    component: Error,
  },
  {
    // path: "../views/Signup",
    path: '/',
    name: 'Login',
    meta: { authRequired: false, layout: 'Clear' },
    component: Login,
  },
  {
    path: '/receiving/manage',
    name: 'ReceivingManage',
    component: ReceivingManage,
    meta: { authRequired: true, title: 'receivingManage' },
  },

  {
    path: '/receiving/inspect',
    name: 'ReceivingInspect',
    meta: { authRequired: true, title: 'receivingInspect' },
    component: ReceivingInspect,
  },

  {
    path: '/receiving/confirm',
    name: 'ReceivingConfirm',
    meta: { authRequired: true, title: 'receivingConfirm' },
    component: ReceivingConfirm,
  },

  {
    path: '/shipping/vehicle',
    name: 'ShippingVehicle',
    meta: { authRequired: true, title: 'shippingVehicle' },
    component: ShippingVehicle,
  },
  {
    path: '/shipping/delivery',
    name: 'ShippingDelivery',
    meta: {
      authRequired: true,
      allows: 'admin',
      title: 'shippingDelivery',
    },
    component: ShippingDelivery,
  },
]

export default routes
