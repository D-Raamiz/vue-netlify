<template>
  <Layout>
    <h1 class="title">To Do List</h1>
    <Todo />
  </Layout>
</template>

<script>
import Todo from '~/components/Todo.vue';

export default {
  components: {
    Todo
  }
};
</script>

<style>
.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>

