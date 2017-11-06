<template>
  <div class="welcome">
    <i class="fa fa-calendar-check-o fa-5x"></i>
    <h1>{{ title }}</h1>
    <todo-list></todo-list>
    <h2>Useful Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2" target="_blank">To-Do List Tutorial</a></li>
      <li><a href="https://vuejs.org/v2/guide/list.html#v-for-with-a-Component" target="_blank">List Rendering</a></li>
    </ul>
  </div>
</template>

<script>
import TodoList from './TodoList'

export default {
  name: 'WelcomePage',
  components: {
    TodoList
  },
  data() {
    return {
      title: 'Vue To-do List'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
