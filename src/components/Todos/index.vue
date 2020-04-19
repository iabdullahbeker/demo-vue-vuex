<template>
  <div>
    <AddTodo :addTodo="addTodo" />
    <h1>Todos</h1>
    <div v-if="getAllTodos.length==0">
      there is no any todos
    </div>
    <div v-for="todo in getAllTodos" :key="todo.id">
      <Todo :deleteTodo="deleteTodo" :setCompleted="setCompleted" :todo="todo" />
    </div>
    <h1>Completed</h1>
    <div v-if="getAllCompleted.length==0">
      there is no any completed todos
    </div>
    <ul v-for="todo in getAllCompleted" :key="todo.id">
      <li><Completed :todo="todo" /></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo'
import Completed from './Completed'
import {mapGetters,mapActions} from 'vuex'
import AddTodo from './AddTodo';

export default {
  name:'todos',
  components:{
    Todo,
    Completed,
    AddTodo
  },
  methods:{
    ...mapActions(['deleteTodo','setCompleted','addTodo'])
  },
  computed:{
    ...mapGetters([
      'getAllTodos',
      'getAllCompleted'
    ]),
  },


}
</script>

<style>
</style>
