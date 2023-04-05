// 引入router
// 使用历史路由
import { createRouter, createWebHistory } from 'vue-router'
// 创建路由表
const routes = [
    {
        path: '/',
        // 重定向 到home页面
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/att',
        component: () => import('../components/Attention.vue'),

        // 路径为/att的子路径
        children: [
            // query传值
            // 使用时：$router.query
            {
                path: 'news',
                component: () => import('../components/Attention/News.vue')
            },


            // ----------------------------------------------------------------------------           
            // query作为属性值传值，使用props接收传值
            // 使用时：props:['query'] query不是固定的根据下面props来定
            {
                path: 'community',
                name: 'com',
                // 将query传值作为props接收，route就是路径信息， route.query.id就是query传来的id
                props: route => ({ query: route.query.id }),
                component: () => import('../components/Attention/Community.vue')
            },


            // -------------------------------------------------------------------------------
            // params传值
            // 需要设置占位
            // 使用时：$router.params
            {
                path: 'up/:id',
                // 使用name代替上面的路径
                name: 'up',
                component: () => import('../components/Attention/Person.vue')
            },

            // -------------------------------------------------------------------------------
            // 布尔模式
            // 使用时：props['要传的属性名']
            {
                path: 'cartoon/:id',
                name:'ctn',
                component: () => import('../components/Attention/Cartoon.vue'),
                // 使用props接收传值
                props: true
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../components/Longin.vue')
    }
]

// 创建路由器
const route = createRouter({
    history: createWebHistory(),
    routes
})

// 暴露
export default route