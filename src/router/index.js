import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "../components/IndexPage";
import CoursesPage from "../components/CoursesPage";
import LecturersPage from "../components/LecturersPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage
  },
  {
    path: '/lecturers',
    name: 'lecturers',
    component: LecturersPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
