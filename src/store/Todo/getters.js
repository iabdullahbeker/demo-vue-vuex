const getters = {
  getAllTodos(state) {
    return state.todos
  },
  getAllCompleted(state) {
    return state.completed
  },
}

export default getters
