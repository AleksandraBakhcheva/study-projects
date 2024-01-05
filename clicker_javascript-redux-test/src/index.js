import { createStore } from "../node_modules/redux/dist/redux.mjs";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  }
  return state;
};

const store = createStore(counter);

const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

const reset = {
  type: "RESET",
};

const header = document.createElement("h1");
header.innerText = "Redux Clicker";
document.body.append(header);

const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
document.body.append(count);

const container = document.createElement("div");
container.classList = "container";
document.body.append(container);

const decBtn = document.createElement("button");
decBtn.innerText = "-";
decBtn.onclick = () => store.dispatch(decrement);
document.body.querySelector(".container").appendChild(decBtn);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch(increment);
document.body.querySelector(".container").appendChild(incBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
resetBtn.onclick = () => store.dispatch(reset);
document.body.querySelector(".container").appendChild(resetBtn);

const render = () => {
  document.getElementById("count").innerText = store.getState();
};

store.subscribe(render);
