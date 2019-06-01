var app = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message_1: 'You loaded this page on ' + new Date().toLocaleString(),
        message_2: new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        visible: true,
        message_1: 'Visible',
        message_2: 'Invisible'
    },
    methods: {
        toggle_visibility: function () {
            this.visible = !this.visible;
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        message_1: "Append Item",
        item: "New Item",
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        append: function () {
            this.todos.push({ text: this.item });
        }
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var ItemLabel = {
    props: {
        text: String,
        editing: Boolean,
        id: Number
    },
    computed: {
        editableText: {
            get: function () {
                return this.text;
            },
            set: function (newValue) {
                this.$emit('item-changed', this.id, newValue);
            }
        }
    },
    template: '<input :disabled=!editing class="form-control" v-model="editableText" />'
};

var ItemDeleteButton = {
    props: { id: Number },
    methods: {
        remove: function () {
            this.$emit('item-deleted', this.id);
        }
    },
    template: '<button class="btn btn-sm btn-danger" v-on:click="remove"><i class="fa fa-trash" /></button>'
};

var ItemEditButton = {
    props: { id: Number },
    methods: {
        toggleEdit: function () {
            this.$emit('item-toggle-edit',this.id);
        }
    },
    template: '<button class="btn btn-sm btn-warning" v-on:click="toggleEdit"><i class="fa fa-pen" /></button>'
};

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables', editing: true },
            { id: 1, text: 'Cheese', editing: false },
            { id: 2, text: 'Whatever else humans are supposed to eat', editing: false }
        ]
    },
    methods: {
        onToggleEdit: function (id) {
            let index = this.groceryList.map(item => item.id).indexOf(id);
            this.groceryList[index].editing = !this.groceryList[index].editing;
        },
        onItemChanged: function (id, text) {
            let index = this.groceryList.map(item => item.id).indexOf(id);
            this.groceryList[index].text = text;
        },
        onItemDeleted: function (id) {
            let index = this.groceryList.map(item => item.id).indexOf(id);
            this.groceryList.splice(index, 1);
        }
    },
    components: {
        'item-label': ItemLabel,
        'item-delete-button': ItemDeleteButton,
        'item-edit-button' : ItemEditButton
    }
});