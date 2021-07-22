
export const routes = [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            { name: 'domainlist', key: 'domainlist',path: '/domainlist', component: './domainlist'},
            { name: 'admin', key: 'admin',path: '/admin', component: './admin'},
        ],
    }, 
]