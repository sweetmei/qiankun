
import { defineConfig } from 'umi';
import { routes } from './router';

export default defineConfig({
    hash: true,
   
    dynamicImport: {
        loading: '@/layouts/Loading',
    },
    qiankun:{
        slave:{}
    },
    routes,
    base:'/domain-project1'
    
    
});