import Vue from "vue";
import Router from "vue-router";
import Resume from "@/pages/resume";
// import Home from "@/pages/home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Resume,
      meta: {
        title: "homepage"
      }
    }
    // {
    //     path: '/resume/:resumeid',
    //     name: 'resume',
    //     component: Resume
    // }
  ]
});
