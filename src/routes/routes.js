import DashboardLayout from '@/layout/DashboardLayout'
import NormalLayout from '@/layout/NormalLayout'
import AuthLayout from '@/layout/AuthLayout'


const routes = [
    {
        path: '/',
        redirect: 'home',
        component: NormalLayout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home/Home'),
                meta: { requiresAuth: true },
            },
            {
                path: '/profile-groups/new',
                name: 'New Profile Group',
                component: () => import('@/components/ProfileGroups/NewProfileGroup'),
                meta: { requiresAuth: true },
            },
            {
                path: '/profile-groups/:id/edit',
                name: 'Edit Profile Group',
                component: () => import('@/components/ProfileGroups/EditProfileGroup'),
                meta: { requiresAuth: true },
            },
            {
                path: '/calendars/new',
                name: 'New Calendar',
                component: () => import('@/components/Calendars/NewCalendar'),
                meta: { requiresAuth: true },
            },
            // {
            //     path: '/calendars/:id/edit',
            //     name: 'Edit Calendar',
            //     component: () => import('@/components/Calendars/EditCalendar'),
            //     meta: { requiresAuth: true },
            // },
            {
                path: '/calendars/:id/wizard/:stage',
                name: 'Calendar Wizard',
                component: () => import('@/components/Calendars/CalendarWizard/CalendarWizard'),
                meta: { requiresAuth: true },
                // children:[
                //     {
                //         path: 'social_accounts',
                //         component: ()=>import('@/components/Calendars/CalendarWizard/SocialAccounts')
                //     },
                //     {
                //         path: 'rss_feeds',
                //         component: ()=>import('@/components/Calendars/CalendarWizard/SocialAccounts')
                //     }
                // ]
            },
            {
                path: '/account/edit',
                component: () => import('@/components/Account/EditAccount/EditAccount'),
                meta: { requiresAuth: true },
                /* children: [
                    {
                        path: 'profile',
                        component: () => import('@/components/Account/EditAccount/Profile'),
                        meta: { requiresAuth: true, hideFooter: true },
                    },
                    {
                        path: 'password',
                        component: () => import('@/components/Account/EditAccount/Password'),
                        meta: { requiresAuth: true, hideFooter: true },
                    },
                    {
                        path: 'notifications',
                        component: () => import('@/components/Account/EditAccount/Notifications'),
                        meta: { requiresAuth: true, hideFooter: true },
                    }
                ] */
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