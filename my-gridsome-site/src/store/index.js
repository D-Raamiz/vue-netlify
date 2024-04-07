// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    deleteTodo({ commit }, index) {
      commit('deleteTodo', index);
    }
  }
});
