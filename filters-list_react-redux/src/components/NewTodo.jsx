import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";

export default function NewTodo() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.title.value) {
      dispatch(addTodo(event.target.title.value));
    }
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <label htmlFor="title"></label>
        <input type="text" placeholder="new todo" name="title" id="title" />
        <input type="submit" value="Add Todo" />
      </>
    </form>
  );
}
