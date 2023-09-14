import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';   
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
//  import image from "../src/image/image.jpg"
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
 if(email==='naveena' && password==='1234')
 {
  alert("welcome admin");
  navigate("/book");
 }
  else if(res.data==='Login Success')
  {
    toast.success("login successful");
    setTimeout(() => {
      
      navigate("/user");
    }, 2000);
  }
  else{
    toast.error(res.data);
  }
})
}
};


return (
<div className="loginbody" >
 {/* <img src={image1} className='image'/>  */}
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

<div className='formlogin'>
<form>

<label className="labellogin">Email</label>
<input onChange={handleEmail} className="inputlogin"
value={email} placeholder='email'
type="email" required/>

<label className="labellogin">Password</label>
<input onChange={handlePassword} className="inputlogin"
value={password} placeholder='password' type="password" required/>


<button onClick={handleSubmit} className="btn" type="submit">Submit</button>
<h3>New User?<Link to='/s' style={{textDecoration:'none'}}> signup</Link></h3>
 {/* <h3><Link to='/f' style={{textDecoration:'none'}}> forget password?</Link></h3>  */}
 
 
</form>

</div>
</div>

);
}