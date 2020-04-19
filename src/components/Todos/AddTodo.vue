<template>
      <v-row justify="space-around">
      <v-text-field
          v-model="todo"
          label="Enter your todo name"
        ></v-text-field>
        <v-btn color="primary" @click="addTodoFunc">Add Todo</v-btn>
      </v-row>
</template>

<script>
export default {
  name:'add-todo',
  props:['addTodo'],
  data(){
    return {
      todo:""
    }
  },
  methods:{
    addTodoFunc(){
      this.addTodo(this.todo)
      this.todo=""
    }

  }
}

</script>

<style>

</style>
