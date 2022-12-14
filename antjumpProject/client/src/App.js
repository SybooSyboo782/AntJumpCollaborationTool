import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqRoute from "./routes/FaqRoute";
import IntroRoute from "./routes/IntroRoute";
import PaymentRoute from "./routes/PaymentRoute";
import ProjectRoute from "./routes/ProjectRoute";
import QnaRoute from "./routes/QnaRoute";
import RootRoute from "./routes/RootRoute";
import MemberRoute from "./routes/MemberRoute";
import InviteRoute from "./routes/InviteRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RootRoute />} />
        <Route path="/intro/*" element={<IntroRoute />} />
        <Route path="/payments/*" element={<PaymentRoute />} />
        <Route path="/qnas/*" element={<QnaRoute />} />
        <Route path="/faqs/*" element={<FaqRoute />} />
        <Route path="/project/*" element={<ProjectRoute />} />
        <Route path="/members/*" element={<MemberRoute />} />
        <Route path="/invited/*" element={<InviteRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
