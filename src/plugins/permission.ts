import NProgress from "@/utils/nprogress";
import router from "@/router";

export function setupPermission() {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    // 如果未匹配到任何路由，跳转到404页面
    if (to.matched.length === 0) {
      next(from.name ? { name: from.name } : "/404");
    } else {
      // 如果路由参数中有 title，覆盖路由元信息中的 title
      const title = (to.params.title as string) || (to.query.title as string);
      if (title) {
        to.meta.title = title;
      }
      next();
    }
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
