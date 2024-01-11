// Renders Specific DOM items when store is updated
const store = Redux.createStore(ROOT_REDUCER);
console.log("STORE", store, store.getState());
console.log(ADD_TODO_LIST);

/**
 * store.subscribe help us to connect out vanilla js app with redux ecosystem
 */
const UnSubscribe = store.subscribe(() => {
  console.log("STORE CHANGED", store.getState());
  renderTodoList(store.getState().todos.all);
});

function renderTodoList(list = []) {
  const todo_unordered_list = document.getElementById("todo-list");
  todo_unordered_list.innerHTML = "";
  let itemNodes = [];
  list.forEach((item) => {
    itemNodes.push(createListItem(item));
  });
  todo_unordered_list.append(...itemNodes);
}

function createListItem(data = {}) {
  const listItem = document.createElement("li");
  listItem.innerText = data.task;
  return listItem;
}
