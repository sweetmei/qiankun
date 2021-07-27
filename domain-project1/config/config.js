
import { defineConfig } from 'umi';
import { routes } from './router';

export default defineConfig({
   
    dynamicImport: {
        loading: '@/layouts/Loading',
    },
    qiankun:{
        slave:{}
    },
    routes,
    base:'/domain-project1',
    exportStatic:{}
    
});