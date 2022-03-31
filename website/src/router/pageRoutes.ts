import { defineComponent,defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import PageIndex from '@/pages/index.vue'
const Chain33Home = ()=>import('@/pages/Chain33/index.vue')
const Baas = ()=>import('@/pages/Baas/index.vue')
const Collaborate = ()=>import('@/pages/Collaborate/index.vue')
const News = ()=>import('@/pages/News/index.vue')
const Classes = ()=>import('@/pages/Classes/index.vue')
const About = ()=>import('@/pages/About/index.vue')
const pagesRoutes:RouteRecordRaw[] = [
    {
        path:'/',
        component:PageIndex,
        redirect:'/chain33',
        children:[
            {path:'/chain33',component:Chain33Home,name:'Chain33'},
            {path:'/baas',component:Baas,name:'Baas33'},
            {path:'/collaborate',component:Collaborate,name:'合作生态'},
            {path:'/news',component:News,name:'新闻动态'},
            {path:'/class',component:Classes,name:'公开课'},
            {path:'/about',component:About,name:'关于我们'}
        ]
    }
]


export default pagesRoutes