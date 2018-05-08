import VueRouter from 'vue-router';
console.log('initialized routes.');
const routes = [
    { path: '/', name: 'index', component: require('./components/Index.vue') },
    { path: '/chart', name: 'chart', component: require('./components/Chart.vue') },
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
});