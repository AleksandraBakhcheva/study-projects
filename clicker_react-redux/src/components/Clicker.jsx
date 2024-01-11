import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store";

export default function Clicker() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div className="container">
        <button onClick={() => dispatch(decrement)}>-</button>
        <button onClick={() => dispatch(increment)}>+</button>
        <button onClick={() => dispatch(reset)}>reset</button>
      </div>
    </div>
  );
}
