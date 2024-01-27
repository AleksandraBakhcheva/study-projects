import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTodos } from "../store/todos/todos-selectors";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";
import { selectActiveFilter } from "../store/filters/filters-selectors";

export default function TodoList() {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
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
