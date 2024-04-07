<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo">
      <ul>
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          {{ todo }}
          <button @click="deleteTodo(index)" class="delete-button">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.$store.dispatch('addTodo', this.newTodo);
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.$store.dispatch('deleteTodo', index);
      }
    }
  };
  </script>
  
  <style>
  .todo-item {
    margin-bottom: 10px; /* Add margin between list items */
  }
  
  .delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background-color: #d32f2f;
  }
  </style>
  