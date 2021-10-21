const c1 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Journal.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Index.vue")

export default [
  {
    path: "/journal/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
