import { useSelector, useDispatch } from "react-redux";
import { allTodos } from "../store/todos/todos-selectors";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";

export default function TodoList() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.todoId))}
          />
          <p className={todo.completed === true ? "completed" : ""}>
            {todo.title}
          </p>
          <button onClick={() => dispatch(removeTodo(todo.todoId))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
