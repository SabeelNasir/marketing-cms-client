import DashboardLayout from '@/layout/DashboardLayout'
import NormalLayout from '@/layout/NormalLayout'
import AuthLayout from '@/layout/AuthLayout'


const routes = [
    {
        path: '/',
        redirect: 'home',
        component: NormalLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home/Home'),
            },
            {
                path: '/calendars',
                component: () => import('@/components/Calendars/Calendars'),
                children: [
                    {
                        path: ':id/edit',
                        component: () => import('@/components/Calendars/EditCalendar'),
                    },
                    {
                        path: 'new',
                        component: () => import('@/components/Calendars/NewCalendar'),
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "demo" */ '@/views/Login.vue'),
                requiresVisitor: true
            },
            {
                path: 'logout',
                name: 'logout',
                component: () => import('@/views/auth/Logout'),
                requiresAuth: true
            },
            {
                path: '/register',
                name: 'register',
                component: () => import(/* webpackChunkName: "demo" */ '@/views/Register.vue'),
                requiresVisitor: true
            }
        ]
    }
]

export default routes