const actions = {
  deleteTodo(context, todoId) {
    context.commit('deleteTodo', todoId)
  },
  addTodo(context,todo){
    if(todo.length ==0){
      alert('please fill todo name')
      return
    }
    context.commit('addTodo', todo)
  },
  setCompleted(context,todo){
    context.commit('setCompleted',todo)
  },
}

export default actions
