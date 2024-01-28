import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { loadState, saveState } from "./local-storage";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000)
  );

  return store;
};
