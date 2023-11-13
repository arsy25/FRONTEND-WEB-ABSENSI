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
      {
        path: "/",
        name: "tablesiswa",
        component: () => import("pages/ADMIN/SISWA/TableSiswa.vue"),
      },
      {
        path: "/",
        name: "addsiswa",
        component: () => import("pages/ADMIN/SISWA/AddSiswa.vue"),
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

  {
    path: "/",
    component: () => import("layouts/LoginAdmin.vue"),
    children: [
      {
        path: "/login_admin",
        component: () => import("pages/LOGIN/AdminLogin.vue"),
      },
    ],
  },
];

export default routes;
