import { createStore } from "redux";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { todoId: Date.now(), title: action.title, completed: false },
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.todoId !== action.todoId);
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.todoId === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    case "DELETE_TODOS": {
      return [];
    }
    default:
      return state;
  }
};

export const store = createStore(todos);

export const addTodo = (title) => ({ type: "ADD_TODO", title });
export const removeTodo = (todoId) => ({ type: "REMOVE_TODO", todoId });
export const toggleTodo = (todoId) => ({ type: "TOGGLE_TODO", todoId });
export const deleteAll = (todos) => ({ type: "DELETE_TODOS", todos });
