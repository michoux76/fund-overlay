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
    computed: {
        counter: function() {
            return formatter.format(this.count.references.counts.amount_raised_unattributed)
        }
    },
    methods: {
        async updateCounter() {
            const response = await fetch("/count");
            const data = await response.json();
            this.count = data
        }
    },
    async created () {
        const response = await fetch("/count");
        const data = await response.json();
        this.count = data
        setInterval(()=>{
            this.updateCounter()
        },5000)
    }
}).mount('#app')