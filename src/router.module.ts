import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'app',
      component:  () => import("./app.component.vue"),
      //redirect:"/home",
      children: [
        { path: '',  component:  () => import("./pages/home/home.page.vue")}
      ],
    },
  ],
})

