//configure-store.ts

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../store/todo/reducers";
import rootSaga from "../../../store/todo/sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the saga middleware
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// Run the root saga
sagaMiddleware.run(rootSaga);
// Subscribe to store changes
store.subscribe(() => {
  console.log("Redux Store State:", store.getState());
});

export default store;
