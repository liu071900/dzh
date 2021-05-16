import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from "./layout/dashboardLayout";
import DetailLayout from "./layout/detailLayout";


import dashboard from "./pages/dashboard"
import LinkPage from "./pages/linkpage"

Vue.use(Router)

var routes = [
    {
        path: '/',
        name: 'dashboardlayout',
        component:DashboardLayout,
        children:[
            {
                path: '/',
                name: 'dashboard',
                component:dashboard,
            }
        ]
    },

    {
        path: '/subjects',
        name: 'subjects',
        component:DetailLayout,
        children:[
            {
                path: '/',
                name: 'LinkPage',
                component:LinkPage,
            }
        ]
    },
  
]

export default new Router({
    routes
})
