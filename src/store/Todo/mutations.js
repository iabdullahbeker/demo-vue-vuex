const mutations = {
  deleteTodo(state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id != todoId);
    // this.completed = this.completed.filter((todo)=> todo.id != id);
  },
  addTodo(state, todo) {
    var newTodo = {
      id:state.todos.length > 0 ?state.todos.slice(-1)[0].id +1 : 1,
      name:todo,
      completed:false
    };
    state.todos.push(newTodo);
  },
  setCompleted(state,todo){
    todo.completed ? state.completed.push(todo)
    : state.completed = state.completed.filter((el)=>el.id != todo.id)
  }
}

export default mutations
