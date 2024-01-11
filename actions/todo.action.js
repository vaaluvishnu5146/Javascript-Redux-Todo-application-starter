const ADD_TODO_LIST = "ADD_TODO_LIST";
const WITH_DRAW_MONEY = "WITH_DRAW_MONEY";
// DISPATCHERS
// HELP US TO SEND THE DATA FROM ACTION CREATOR TO REDUCERS
function bindAddTodoList(todo) {
  console.log(todo);
  return store.dispatch({ type: ADD_TODO_LIST, payload: todo });
}
