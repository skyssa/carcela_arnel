<template>
  <div class="container">

    <div class="header">
      <div class="title"><h1>Todo App</h1></div>
      <div class="actions">
        <form @submit="addTask">
          <input class="task-input" type="text" placeholder="Add Task" v-model="task" required>
          <button class="add-task-button" type="submit">Add</button>
        </form>
      </div>
    </div>
    
    <div class="tasks">
      <div class="task-items" v-for="todo in todos"  :key="todo.id">
        <p :class="{ done: todo.status }">{{ todo.details }}</p>
        <button class="done-btn" @click="toggleDone(todo)">{{ todo.status ? 'Undone' : 'Done' }}</button>
        <button class="remove-btn" @click="removeTask(todo.id)">Remove</button>
      </div>
      <button class="clear-btn" @click="clearAllTasks" v-if="todos.length > 0">Clear ALL tasks</button>
    </div>

  </div>
  
</template>
  
  <script>
  // import { v4 as uuidv4 } from 'uuid';
  import {db} from '../firebase.js';
  import { collection, onSnapshot,addDoc,orderBy,query, serverTimestamp,doc, deleteDoc } from "firebase/firestore";
  export default {
    data(){
      return{
        task:'',
        todos:[
        ],
 
      }
    },
    methods:{
      async addTask(e){
        e.preventDefault();
      
         try {
             await addDoc(collection(db, "todos"), {
              details: this.task,
              status: false,
              date_created:serverTimestamp()
              
            });
            // console.log("Document written with ID: ", docRef);
            this.task='';
          } catch (e) {
            console.error("Error adding document: ", e);
          }
  
      },
     async removeTask(id){
        try{
           await deleteDoc(doc(db,'todos',id))
        }catch(e){
          console.log(e);
        }
      },
       getData(){
        const fsquery = query(collection(db, "todos"), orderBy('date_created','asc'));
         onSnapshot(fsquery,(querySnapshot) => {
          const newTasks = [];
          querySnapshot.forEach((doc) => {
            const todo = {
                id:doc.id,
                details:doc.data().details,
                status:doc.data().status
                }
                newTasks.unshift(todo);
             });
             this.todos=newTasks;
        });
  
      },
      clearAllTasks() {
      this.todos = []; 
    },

    toggleDone(todo) {
      todo.status = !todo.status;
    },
     
    },
   mounted(){
      this.getData();
    }
  }
  </script>
  
  <style>

.container{
  border:1px solid;
  border-radius: 5px;
  width: 300px;
  padding:20px;
  margin:0 auto;
  text-align: center;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  margin: 0;
}

.add-task-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.task-input {
  padding: 8px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-task-button {
  margin-left: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.search-input {
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.task-items{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.task-items:hover{
background-color: #ccc;
cursor: pointer;
}
.remove-btn{

  background-color: #ff0019;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
}
.done-btn{

  background-color: #10009c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
}


.done {
  position: relative;
  text-align: center;
  width: 30px;
  height: 30px; 
}
.done::before {
  position: absolute;
  left: 0;
  top: 50%;
  height: 50%;
  width: 3px;
  background-color: green;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
}
.done::after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: green;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
}

.clear-btn{
  width: 100%;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
}

</style>
  