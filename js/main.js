Vue.createApp({
    data(){
        return{
            open: false
        }
    },
    methods:{
        toggleButton(){
            this.open = !this.open
        }
    }
}).mount('#app')