import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import filterReducer from "./reducer/filterReducer";
import dashboardReducer from './reducer/dashboardReducer'

const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  dashboard: dashboardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
