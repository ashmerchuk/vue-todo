<template>
    <div class="form">
        <div class="container" id="app">
            <h1>{{title}}</h1>
            <div>
            <input type="text" :placeholder="placeholderString" v-model="inputValue" @keypress.enter="addTodo">
            <button class="btn" @click="addTodo">Add</button>
            </div>
            <br>
            <hr>
            <ul v-if="notes.length !== 0">
                <div v-if="notes.length === 1">
                    <h3>You have 1 note </h3>
                </div>
                <div v-else>
                    <h3>You have {{notes.length}} notes </h3>
                </div>
                <li v-for="(myNote, index) in notes" :key="myNote">
                    <span :class="important === true ? 'imp' : ''">{{Uppercase(myNote)}}</span>
                    <button class="btn danger" @click="deleteEvent(index)">Delete</button>
                    <button class="btn important" @click="importantEvent(index)">Important</button>
                    <button class="btn done" @click="doneEvent(index)">Done</button>
                </li>
            </ul>
            <h3 v-else>You don't have what to do</h3>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
         return{
             placeholderString: 'Type some todo...',
             title: 'Todo list',
             inputValue: '',
             notes: [],
             limit: 50,
             important: false, 
         }
    },
    methods: {
        addTodo(){
            if(this.inputValue.length <= this.limit){
              if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
              }
            }
            else{
              alert(`Please maximal ${this.limit} letters`)
            }
            this.inputValue = ''
        },
        Uppercase(item){
            return item.toUpperCase();
        },
        deleteEvent(index){
           this.notes.splice(index, 1)
        },
        importantEvent(index){
          this.notes[index]
          this.important = true
        }
    },
}
</script>
<style>
body{
    background-color: #2d3c4f;
}
.imp{
  color:#c52323
}
.events{
  margin: 2em 35%;
  font-size: 2.5em;
}
hr{
  margin: 15px 0;
}
.center{
    display: flex;
    justify-content: center;
}
input{
  width: 30%;
  border: 2px solid rgb(32, 165, 125);
  border-radius: 15px;
  margin-bottom: 25px;
}
h1{
    text-align: center;
    font-size: 4em;
}
h2{
    text-align: center;
    font-size: 2em;
}
h3{
  text-align: center;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .post{
    padding: 15px;
    border: 5px solid teal;
    margin: 15px;
  }
  button{
    border-radius: 10px;
    background-color: #233fc0;
    color: white;
    font-size: 20px;
    font-weight: 100;
    border: 2px solid rgb(6, 44, 22);
    letter-spacing: 0.05em;
    margin: auto;
    padding: 0.5rem 1.5rem;
    
  }
 .sub {
  background-color: #e2563b;
  color: white;
  }
  .danger{
    background-color: #c52323;
    float: right;
  }
   .important{
    background-color: #e2cf22;
    float: right;
  }
   .done{
    background-color: #1ec41e;
    float: right;
  }
  button:hover{
    cursor:pointer;
    opacity: 0.8;
  }
  .container{
    max-width: 80%;
    background-color: white;
    margin: 3% 15%;
    border-radius: 20px;
    padding: 3%;
  }
input{
  width: 100%;
  padding: 10px;
}
li{
  font-size: 25px;
  margin: 15px;
  text-align: left;
}
</style>