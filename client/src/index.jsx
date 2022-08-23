import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { getUsers } from "./actions/users.actions";
import { BrowserRouter } from "react-router-dom";
import rootReducer from './reducers'



const store = configureStore({ reducer: rootReducer })


store.dispatch(getUsers());



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

);

