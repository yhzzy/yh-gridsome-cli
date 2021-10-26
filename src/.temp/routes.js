const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Journal.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/pro/Desktop/project-yang/yh-gridsome-cli/src/pages/Index.vue")

export default [
  {
    path: "/projects/:id/",
    component: c1
  },
  {
    path: "/journal/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/journal-detail/:id/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
