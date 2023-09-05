import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk"; // Import Redux Thunk middleware

// Create the store with middleware applied
const store = createStore(
  reducer,
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;
