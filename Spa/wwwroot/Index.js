import App from './vue/App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});