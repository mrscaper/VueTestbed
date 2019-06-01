var NavItem = {
    props: {
        text: {
            default: 'DefaultText',
            type: String
        },
        link: {
            type: Object,
            default: () => ({
                link_class: 'nav-link',
                url: '#'
            })   
        }
    },
    template:'#navitem-template'
};



var Navbar = {
    props: {
        name: {
            default: 'default name',
            type: String
        }
    },
    components: {
        'vue-nav-item' : NavItem
    },
    template: '#navbar-template'
};