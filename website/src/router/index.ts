
import { createWebHistory,createRouter} from 'vue-router'
import pagesRoutes from './pageRoutes'
export default createRouter({
    history: createWebHistory(),
    routes:pagesRoutes
})

