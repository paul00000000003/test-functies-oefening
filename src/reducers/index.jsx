import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isLogged from "./isLogged";
import itemtoevoegenReducer from "./itemtoevoegenReducer";

const AllReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLogged,
  boodschappenlijst: itemtoevoegenReducer,
});

export default AllReducers;
