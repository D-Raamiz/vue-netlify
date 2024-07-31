<template>
    <div>
      <h1>AD Here</h1>
      <div v-if="isProduction" class="ad-container">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-3940256099942544"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
      </div>
      <h1>ToDo List</h1>
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
    mounted() {
    this.fetchData();
    if (this.isProduction) {
      this.loadAdsenseScript().then(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      });
    }
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
      },
      loadAdsenseScript() {
          return new Promise((resolve) => {
            if (window.adsbygoogle) {
              resolve();
            } else {
              const script = document.createElement('script');
              script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
              script.async = true;
              script.onload = () => {
                resolve();
              };
              document.head.appendChild(script);
            }
          });
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
  