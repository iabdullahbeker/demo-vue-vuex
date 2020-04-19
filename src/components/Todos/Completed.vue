<template>
  <div>
    <p :class="{'is-completed':todo.completed}">
      {{todo.name}}
    </p>
  </div>
</template>

<script>
export default {
  name:'completed',
  props:["todo"],
}

</script>

<style>
</style>
