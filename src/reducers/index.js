import { combineReducers } from "redux";
// import courses from "./courseReducer";
import dashboard from "./dashboardReducer";
import ajaxCallInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
//   courses,
  dashboard,
  ajaxCallInProgress
});

export default rootReducer;