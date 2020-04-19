<template>
  <div>
    <v-card
    max-width="344"
    class="mb-4"
  >
  <v-list-item>
        <v-list-item-content>
          <p >
            <v-checkbox class="mx-2" label="Complete" v-model="checked" @change="complete"/>
           <strong>{{todo.name}}</strong>
            <v-btn class="ml-10" color="error"  @click="deleteTodo(todo.id)"> Delete </v-btn>
          </p>
        </v-list-item-content>
      </v-list-item>
</v-card>

  </div>
</template>

<script>
  export default {
    name:'todo',
    props:["todo",'setCompleted','deleteTodo'],
    methods:{
      complete(){
        this.todo.completed = this.checked
        this.setCompleted(this.todo)
      },
    },
    data(){
      return{
        checked : 'false'
      }
    }
  }
</script>

<style scoped>

  .is-completed{
    text-decoration: line-through;
  }
</style>
