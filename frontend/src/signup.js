import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Signup() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] =useState('');
const [department,setDepartment]=useState('');
const [year,setYear]=useState('');
const navigate=useNavigate();
// const[language,setLanguage] =useState('');

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
};

const handleConfirmPassword = (e) =>{
  setConfirmPassword(e.target.value);
};

const handleDepartment=(e)=>{
  setDepartment(e.target.value);
};

const handleYear=(e)=>{
  setYear(e.target.value);
}

const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '' || confirmpassword=== '' || department === '') {
alert("enter all fields")
} else {
axios.post("http://localhost:8080/save/signup",
{
  username:name,
  email:email,
  password:password,
  confirmpassword:confirmpassword,
  department:department,
  year:year
}).then((res)=>{
  console.log(res.data);
  if(res.data==='Signup successful')
  {
    navigate("/h")
  }
  else{
    toast.error(res.data);
  }
})
}
};

return (
<div className="form">

<form>
<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input" value={name} placeholder='username' type="text"  required/>

<label className="label">Email</label>
<input onChange={handleEmail} className="input" value={email} placeholder='email' type="email" required/>

<label className="label">Password</label>
<input onChange={handlePassword} className="input" value={password} placeholder='password' type="password" />

<label className="label">Confirm Password</label>
<input onChange={handleConfirmPassword} className="input" value={confirmpassword} placeholder='password' type="password" />

<label className="label">Department</label>
<input onChange={handleDepartment} className="input" value={department} placeholder='department' type="password" />


<label className="label">Year</label>
<input onChange={handleYear} className="input" value={year} placeholder='year' type="text" />


<button onClick={handleSubmit} className="btn" type="submit">Submit</button>
<h3>Already a existing account?<Link to='/l' style={{textDecoration:'none'}}>Login</Link></h3>
</form>
</div>
);
}