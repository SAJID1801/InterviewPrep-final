import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import CSCoreSubjects from "./pages/CSCoreSubjects";
import GetParametersForSheet from "./pages/GetParametersForSheet";
import Home from "./pages/Home";
import Resource from "./pages/Resource";
import MainRoutes from "./routes/MainRoutes";
import Login from "./components/session/Login";
import Signup from "./components/session/Signup";
import Cn from "./components/Top_Questions/Cn";
import Dbms from "./components/Top_Questions/Dbms";
import Oops from "./components/Top_Questions/Oops";
import OS from "./components/Top_Questions/OS";
import Sql from "./components/Top_Questions/Sql";
import Dsa from "./components/Top_Questions/Dsa";
import QuestionList from "./pages/QuestionList";

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/core-subject" element={<CSCoreSubjects />} />
          <Route path="/resouce" element={<Resource />} />

          <Route path="/top-interview-questions/cn" element={<Cn />} />
          <Route path="/top-interview-questions/dbms" element={<Dbms />} />
          <Route path="/top-interview-questions/dsa" element={<Dsa />} />
          <Route path="/top-interview-questions/oops" element={<Oops />} />
          <Route path="/top-interview-questions/os" element={<OS />} />
          <Route path="/top-interview-questions/sql" element={<Sql />} />

          <Route
            path="/generate-list-parameter"
            element={<GetParametersForSheet />}
          />
          <Route path="/questions-list/:rating" element={<QuestionList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
