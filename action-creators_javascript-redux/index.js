import { createStore } from "./node_modules/redux/dist/redux.mjs";

let nextTodoId = 3;

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { id: ++nextTodoId, title: action.title, completed: false },
      ];
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};

const defaultValues = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn JavaScript",
    completed: false,
  },
];

const store = createStore(todos, defaultValues);

const addTodo = (title) => ({
  type: "ADD_TODO",
  title,
});

const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  todoId,
});

console.log(store.getState());
store.dispatch(addTodo("Learn Redux"));
console.log(store.getState());
store.dispatch(addTodo("Learn React"));
console.log(store.getState());
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(toggleTodo(3));
store.dispatch(toggleTodo(4));
store.dispatch(toggleTodo(5));
console.log(store.getState());
store.dispatch(addTodo("Get the job"));
console.log(store.getState());
