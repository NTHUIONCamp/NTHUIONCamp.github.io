import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "../components/IndexPage";
import CoursesPage from "../components/CoursesPage";
import LecturersPage from "../components/LecturersPage";
import TravelPage from "../components/TravelPage";
import NoticesPage from "../components/NoticesPage";

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
  {
    path: '/travel',
    name: 'travel',
    component: TravelPage
  },
  {
    path: '/notices',
    name: 'notices',
    component: NoticesPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
