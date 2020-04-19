
<template>
  <v-app id="inspire">

    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

      <v-toolbar-title>Todo</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >

          <v-col cols="10">
          <Todos />
        </v-col>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import Todos from './components/Todos';
export default {
  name:'app',
  components:{
    Todos,
  },

}

</script>

<style>

</style>
