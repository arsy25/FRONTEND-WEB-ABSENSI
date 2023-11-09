const routes = [
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/ADMIN/IndexPage.vue"),
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
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },
];

export default routes;
