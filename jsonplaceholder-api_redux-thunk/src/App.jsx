import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "./store/users/user-actions";
import { loadTodos } from "./store/todos/todo-actions";
import { TodoList } from "./components/TodoList";
import { UserList } from "./components/UserList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello, Redux Thunk</h1>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
