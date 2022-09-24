import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import memberReducer from "./MemberModule";
import faqReducer from "./FAQModule";

// 프로젝트 관련 모듈 import
import { myProjectReducer, participatedProjectReducer, projectReducer } from "./ProjectModule";
const rootReducer = combineReducers({
  qnaReducer,
  paymentReducer,
  faqReducer,
  myProjectReducer,
  participatedProjectReducer,
  projectReducer,
  memberReducer,
});

export default rootReducer;
