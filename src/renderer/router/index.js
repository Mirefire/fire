import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import All from '@/components/all'
import Video from '@/components/video'
import Root from '@/components/root'
import Imgs from '@/components/imgs'
import VidDetall from '@/components/vidDetall'
import IgDetall from '@/components/igdetall'
import Relation from '@/components/relation'
import Relationn from '@/components/relationn'
import Newre from '@/components/newre'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/relation', name: 'Relation', component: Relation
    },
    {
      path: '/relationn', name: 'Relationn', component: Relationn
    },
    { path: '/newre', name: 'Newre', component: Newre },
    {
      path: '/', name: 'Login', component: Login
    },
    {
      path: '/root',
      name: 'root',
      component: Root,
      redirect: '/root/all',
      children: [
        // { path: '/', name: 'All', component: All },
        { path: '/root/all', name: 'All', component: All},
        { path: '/root/imgs', name: 'Imgs', component: Imgs },
        { path: '/root/video', name: 'Video', component: Video },
        { path: '/root/vidDetall', name: 'VidDetall', component: VidDetall },
        { path: '/root/igdetall', name: 'IgDetall', component: IgDetall }

      ]
    }

  ]
})
