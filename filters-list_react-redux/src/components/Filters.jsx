import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filters-actions";

export default function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <div className="filters-btns">
      <button
        onClick={() => dispatch(setFilter("all"))}
        style={{ color: activeFilter === "all" ? "red" : "black" }}
        className="filter-btn"
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("active"))}
        style={{ color: activeFilter === "active" ? "red" : "black" }}
        className="filter-btn"
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        style={{ color: activeFilter === "completed" ? "red" : "black" }}
        className="filter-btn"
      >
        Completed
      </button>
    </div>
  );
}
