import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  process.env.REACT_APP_PUBLIC_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
);

export default store;
