import Vue from 'vue'
import VueRouter from 'vue-router'
require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', component: require('./components/Index.vue') },
//   ]
// })
import router from './routes.js';
const app = new Vue({
    el: '#app',
    router,
});