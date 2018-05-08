import VueRouter from 'vue-router';
console.log('initialized routes.');
const routes = [
    { path: '/', name: 'index', component: require('./components/Index.vue') },
    { path: '/sample-2', name: 'chart', component: require('./components/Chart.vue') },
    { path: '/sample-1', name: 'sample-1', component: require('./components/SampleChart.vue') },
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
});