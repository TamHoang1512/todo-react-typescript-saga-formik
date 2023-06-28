import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import "./styles.css";
import reducer from "./store/todo/reducers";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// Create the Redux store
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
