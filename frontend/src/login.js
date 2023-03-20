import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate=useNavigate();

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
};


const handleSubmit = (e) => {
e.preventDefault();
if ( email === '' || password === '') {
  toast.error("Enter fields");
// setError(true);
} else {
// setSubmitted(true);
// setError(false);
axios.get("http://localhost:8080/get/loginbyemail",
{
  params:{
    email:email,
    password:password
  }
}).then((res)=>{
  console.log(res.data);
  if(res.data==='Login Success')
  {
    navigate("/book")
  }
  else{
    toast.error(res.data);
  }
})
}
};


return (
<div className="forms">
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

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} placeholder='email'
type="email" required/>

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} placeholder='password' type="password" required/>


<button onClick={handleSubmit} className="btn" type="submit">Submit</button>
<h3>New User?<Link to='/s' style={{textDecoration:'none'}}> signup</Link></h3>
</form>
</div>
);
}