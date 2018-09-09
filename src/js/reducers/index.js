import { combineReducers } from "redux"

//reducers can be separated out and combined
//similarly actions can be seperated out to make smaller files


import data from "./appReducer";

export default combineReducers({
  data
})
