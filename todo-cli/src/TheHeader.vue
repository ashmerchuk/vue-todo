<template lang="pug">
    <div class="form">
        <div class="container" id="app">
            <h1>{{title}}</h1>
            <input type="text" :placeholder="placeholderString" v-model="inputValue" @keypress.enter="addTodo">
            <button class="btn" @click="addTodo">Add</button>
            <hr>
            <ul v-if="notes.length !== 0">
                <div v-if="notes.length === 1">
                    <h3>You have 1 note </h3>
                </div>
                <div v-else>
                    <h3>You have {{notes.length}} notes </h3>
                </div>
                <li v-for="(myNote, index) in notes">{{Uppercase(myNote)}}
                    <button class="btn danger" @click="deleteEvent(index)">Delete</button>
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
</script>
<style>
body{
    background-color: #2d3c4f;
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
    border-radius: 20px;
    background-color: #5eab87;
    color: white;
    font-size: 20px;
    font-weight: 100;
    border: 2px solid rgb(6, 44, 22);
    letter-spacing: 0.05em;
    margin: 25px 10px;
    padding: 0.5rem 1.5rem;
  }
 .sub {
  background-color: #e2563b;
  color: white
  }
  .danger{
    border-radius: 20px;
    background-color: #c01919;
    color: white;
    font-size: 15px;
    font-weight: 100;
    border: 2px solid rgb(6, 44, 22);
    letter-spacing: 0.05em;
    margin: 15px 0 15px 80%;
    position: absolute;
    right: 35%;
    padding: 0.5rem 1.5rem;
  }
  button:hover{
    cursor:pointer;
    opacity: 0.8;
  }
  .container{
    max-width: 1000px;
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