import { combineReducers } from "redux";
import musicReducer from "../../containers/musics/store/reducers";
export const globalReducer = combineReducers({
  ...musicReducer,
})