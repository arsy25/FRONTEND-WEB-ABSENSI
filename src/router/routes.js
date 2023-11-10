const routes = [
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("pages/ADMIN/IndexPage.vue"),
      },
      {
        path: "/",
        name: "addguru",
        component: () => import("pages/ADMIN/GURU/AddGuru.vue"),
      },
      {
        path: "/",
        name: "tableguru",
        component: () => import("pages/ADMIN/GURU/TableGuru.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/abc",
    component: () => import("pages/IndexPage.vue"),
  },
];

export default routes;
