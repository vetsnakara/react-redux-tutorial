import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers/rootReducer";

import App from "./App";

import "materialize-css/dist/css/materialize.min.css";
import "./styles/index.css";

const store = createStore(rootReducers);

const root = document.querySelector("#todo-wrapper");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (process.env.NODE_ENV === "development") module.hot.accept();
