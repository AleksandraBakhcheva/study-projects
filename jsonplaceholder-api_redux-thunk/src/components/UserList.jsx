import { useSelector } from "react-redux";

export const UserList = () => {
  const { list: users, status, error } = useSelector((state) => state.users);

  return (
    <div>
      Users: {users.length}.{" "}
      <span
        className={
          status === "fullfilled" || status === "loading"
            ? "fullfilled"
            : "rejected"
        }
      >
        Status: {status}
      </span>
      {error && <h4>{error}</h4>}
    </div>
  );
};
