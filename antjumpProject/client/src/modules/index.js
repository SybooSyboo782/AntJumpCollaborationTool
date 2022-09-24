import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import memberReducer from "./MemberModule";
import faqReducer from "./FAQModule";

// 프로젝트 관련 모듈 import
import { myProjectReducer, participatedProjectReducer } from "./ProjectModule";
import { issueReducer } from "./IssueModule";
const rootReducer = combineReducers({
  qnaReducer,
  paymentReducer,
  faqReducer,
  // 프로젝트 관련 모듈 combine
  myProjectReducer,
  participatedProjectReducer,
  memberReducer,
  issueReducer,
});

export default rootReducer;
