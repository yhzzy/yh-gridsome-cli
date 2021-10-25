const c1 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Journal.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Index.vue")

export default [
  {
    path: "/journal/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/journal-detail/:id/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
