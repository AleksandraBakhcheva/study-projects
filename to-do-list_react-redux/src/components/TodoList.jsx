import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, deleteAll } from "../store";

export default function TodoList() {
  const todos = useSelector((state) => state);
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
      <button className="delete-btn" onClick={() => dispatch(deleteAll(todos))}>
        Delete All
      </button>
    </ul>
  );
}
