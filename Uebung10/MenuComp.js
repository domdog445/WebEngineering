Vue.component('simple-menu', {
    data() {
        return {
            values: []
        }
    },
    methods: {
    },
    template: `	<div>
                    {{this.$attrs.vertical}}
                </div>`
})