const Home = () => import(/* webpackChunkName : "Hone" */ "../views/Home");

const SignUp = () =>
  import(/* webpackChunkName : "Singup" */ "../views/SignUp");
const ReceivingManage = () =>
  import(
    /* webpackChunkName : "ReceivingManage" */ "../views/receiving/manage"
  );
const ReceivingInspect = () =>
  import(
    /* webpackChunkName : "ReceivingInspect" */ "../views/receiving/inspect"
  );
const ReceivingConfirm = () =>
  import(
    /* webpackChunkName : "ReceivingConfirm" */ "../views/receiving/confirm"
  );
const ShippingVehicle = () =>
  import(
    /* webpackChunkName : "ShippingVehicle" */ "../views/shipping/vehicle"
  );
const ShippingDelivery = () =>
  import(
    /* webpackChunkName : "ShippingDelivery" */ "../views/shipping/delivery"
  );

const routes = [
  {
    path: "/",
    name: "Root",
    component: Home,
  },
  {
    // path: "../views/Signup",
    path: "/views/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/receiving/manage",
    name: "ReceivingManage",
    component: ReceivingManage,
    children: [
      {
        path: "/receiving/inspect",
        name: "ReceivingInspect",
        component: ReceivingInspect,
        meta: { authRequired: true, allows: ["first"] },
      },
      {
        path: "/receiving/confirm",
        name: "ReceivingConfirm",
        component: ReceivingConfirm,
        meta: { authRequired: true, allows: ["first", "second"] },
      },
    ],
  },
  {
    path: "/shipping/vehicle",
    name: "ShippingVehicle",
    component: ShippingVehicle,
    children: [
      {
        path: "/shipping/vehicle",
        name: "ShippingVehicle",
        component: ShippingVehicle,
      },
      {
        path: "/shipping/delivery",
        name: "ShippingDelivery",
        component: ShippingDelivery,
      },
    ],
  },
];

export default routes;
