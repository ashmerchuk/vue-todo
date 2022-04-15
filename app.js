const App = {
    data(){
         return{
             placeholderString: 'Type some todo...',
             title: 'Todo list',
             inputValue: '',
             notes: []
         }
    },
    methods: {
        addTodo(){
            if(this.inputValue !== ''){
            this.notes.push(this.inputValue)
            }
            this.inputValue = ''
        },
        Uppercase(item){
            return item.toUpperCase();
        },
        deleteEvent(index){
           this.notes.splice(index, 1)
        }
    },
}


Vue.createApp(App).mount('#app')