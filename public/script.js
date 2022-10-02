app = Vue.createApp({
    data() {
        return {
            count: {}
        }
    },
    methods: {
        async counter() {
            const response = await fetch("https://api.npms.io/v2/search?q=vue");
            const data = await response.json();
            return data
        }
    },
    async created () {
        const response = await fetch("https://api.npms.io/v2/search?q=vue");
        const data = await response.json();
        this.count = data
    }
}).mount('#app')