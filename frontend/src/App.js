import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import { Books } from "./Books";
import Edit from "./Edit";
import AddBooks from "./AddBooks";
import { States } from "./States";
import { Student } from "./Student";
import Studentedit from "./Studentedit";


function App() {
  return (
    <div className="signup">
      <BrowserRouter>
        <States>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/s" element={<Signup />} />
            <Route path="/l" element={<Login />} />
            <Route path="/book" element={<Books />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/add" element={<AddBooks />} />
            <Route path="/student" element={<Student/>}/>
            <Route path="/edits" element={<Studentedit />} />
          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}
export default App;
