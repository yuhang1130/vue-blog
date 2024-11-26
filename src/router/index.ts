import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      // children长度大于1的时候，菜单名会显示这个
      title: "首页",
      icon: "home",
      hidden: false,
      alwaysShow: false,
      params: null,
    },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "home",
          affix: true,
        },
      },
      {
        path: "401",
        component: () => import("@/views/error/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error/404.vue"),
        meta: { hidden: true },
      },
    ],
  },
  {
    path: "/love",
    meta: {
      // children长度大于1的时候，菜单名会显示这个
      title: "避风港",
      icon: "love",
      hidden: false,
      alwaysShow: false,
      params: null,
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "Love",
        component: () => import("@/views/love/index.vue"),
        meta: {
          title: "love",
          icon: "love",
          hidden: false,
          alwaysShow: false,
          params: null,
        },
      },
    ],
  },
  {
    path: "/record",
    meta: {
      // children长度大于1的时候，菜单名会显示这个
      title: "日记",
      icon: "record",
      hidden: false,
      alwaysShow: false,
      params: null,
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "Record",
        component: () => import("@/views/record/index.vue"),
        meta: {
          title: "record",
          icon: "record",
          hidden: false,
          alwaysShow: false,
          params: null,
        },
      },
    ],
  },
  {
    path: "/album",
    meta: {
      // children长度大于1的时候，菜单名会显示这个
      title: "旅行",
      icon: "album",
      hidden: false,
      alwaysShow: false,
      params: null,
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "Album",
        component: () => import("@/views/album/index.vue"),
        meta: {
          title: "album",
          icon: "album",
          hidden: false,
          alwaysShow: false,
          params: null,
        },
      },
    ],
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
