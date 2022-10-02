app = Vue.createApp({
    data() {
        return {
            count: {}
        }
    },
    methods: {
        async counter() {
            return await fetch('/count').then(e=>e.json())
        }
    }
}).mount('#app')