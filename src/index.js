import ReactDOM from "react-dom";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./modules";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const store = configureStore({reducer: rootReducer}, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
