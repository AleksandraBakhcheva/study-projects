import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
