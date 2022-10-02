var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
app = Vue.createApp({
    data() {
        return {
            count: {}
        }
    },
    methods: {
        async counter() {
            const response = await fetch("/count");
            const data = await response.json();
            return data
        }
    },
    async created () {
        const response = await fetch("/count");
        const data = await response.json();
        this.count = data
    }
}).mount('#app')