// Add new item in to-do list in the redux store
function reducer_manageTodos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO_LIST:
      let todosCopy = state?.all || [];
      todosCopy.push(action.payload);
      return { ...state, all: todosCopy };
    default:
      return state;
  }
}

// Combine reducer will helps us to collect all the reducers in single place
const ROOT_REDUCER = Redux.combineReducers({
  todos: reducer_manageTodos,
});
