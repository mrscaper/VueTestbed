var container = new Vue({
    el: '#container',
    props: {
        brand: {
            type: Object,
            default: () => ({
                name: 'Hello'
            })
    },
    data: {
        message: 'Hello Vue'
        }
    },
    components: {
        'vue-navbar': Navbar
    }
});