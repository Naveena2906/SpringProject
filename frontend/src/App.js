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
import AddStudent from "./Addstudent";
import Navbar from "./Navbar";
import Landing from "./Landing";
import { Forget } from "./Forget";
import { Userbook } from "./Userbook/Userbook";
import { Explore } from "./Explore/Explore";
import { Tamil } from "./Tamil/Tamil";
import { English } from "./English/English";
import { Hindi } from "./Hindi/Hindi";
// import Home from "./Home/Home";
// import AboutUs from "./AboutUs";


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
            <Route path="/edits" element={<Studentedit/>}/>
            <Route path="/adds" element={<AddStudent/>}/>
            <Route path="land" element={<Landing/>}/>
            <Route path="/f" element={<Forget/>}/>
            <Route path="/user" element={<Userbook/>}/>
            <Route path="/e" element={<Explore/>}/>
            <Route path="/tamilbooks" element={<Tamil/>}/>
            <Route path="/englishbooks" element={<English/>}/>
            <Route path="/hindibooks" element={<Hindi/>}/>
            </Routes>
        </States>             
      </BrowserRouter>

    
    </div>
    
  );
}
export default App;
