import VueRouter, { RouteConfig } from 'vue-router';
import Index from './app/index/Index.vue';
import ErrorPage from './app/error-page/ErrorPage.vue';

const routes: RouteConfig[] = [
    {
        path: '',
        component:  Index
    },
    {
        path: '*',
        component: ErrorPage
    }
];

export const router: VueRouter = new VueRouter({ routes });
