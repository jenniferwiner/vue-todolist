<template>
  <div>
    <input
      v-model="newTodoText"
      v-on:keyup.enter="addNewTodo"
      placeholder="Add a todo"
    >
    <div>
      <todo-item
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:delete="todos.splice(index, 1)"
      ></todo-item>
    </div>
  </div>
</template>

<script type="text/javascript">
  import TodoItem from './TodoItem'

  export default {
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
          },
          {
            id: 2,
            title: 'Take out the trash',
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
    components: {
      TodoItem,
    }
  }
</script>
<style>
</style>
