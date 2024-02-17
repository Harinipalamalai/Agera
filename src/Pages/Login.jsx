// import { useState,} from "react";
// import './login.css';
// import {useNavigate} from "react-router-dom"
// import userloginimage from '../assets/userloginimage.jpg'
// import { Link } from "react-router-dom";

// const Login=()=>{
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formErrors,setFormErrors]=useState({});
//   const [isSubmit,setIsSubmit]=useState(false);

//   const navigate=useNavigate();
//     const handleName=(event)=>{
//         event.preventDefault();
//         setEmail(event.target.value);
//     }
//     const handlePwd=(event)=>{
//         event.preventDefault();
//         setPassword(event.target.value);
//     }
//     const handleSubmit=async(event)=>{
//         event.preventDefault();
//         setFormErrors(validate({email,password}));
//         if(isSubmit===true){
//             try{
//               console.log("Login Successful");
//               window.location.href = "/nav";
//                 navigate('/Signup');
//             }catch(error){
//                 console.error('Error: ',error);
//             }
//         }
//     }

    

//     const validate=(values)=>{
//         const errors={};
//         const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

//         if(!values.email){
//         errors.username="Email is Required";
//         setIsSubmit(false);
//         }else{
//             setIsSubmit(true);
//         }
//         if(!values.password){
//         errors.password="Password is Required";
//         setIsSubmit(false);
//         }
//         else if(!preg.test(values.password)){
//         errors.password="Invalid password";
//         setIsSubmit(false);
//         }else{
//             setIsSubmit(true);
//         }
//         return errors;
//     }    
//     return(
//       <div className="backq"style={{ backgroundImage:`url(${userloginimage})` }} >
//       <div className="logq">
//         <form onSubmit={handleSubmit}>
//        <br/>
//         <center><h1 className="h1n">LOGIN</h1>
//        </center>
//        <h1>                  </h1>
//           <div className="inputbq">
//             <label name="uname">Email</label>
//             <input type="email" value={email} onChange={handleName} required id="uname" />
//           </div>
//           <p  style={{color:"white",fontSize:"17px"}}>{formErrors.username}</p>      
//             <div className="inputbq">
//             <label name="pass">Password</label>
//             <input  type="password" required id="pass" value={password} onChange={handlePwd}/>
//           </div>
//           <p  style={{color:"white",fontSize:"17px"}}>{formErrors.password}</p>      
//           <center>
//             <button className="butq" type="submit" >
//               Login
//             </button>
//           </center>
//           <br></br>
//           <div className="regq">
//               <p>Do not have a account? <Link to="/Signup"><a href="#">Register</a></Link></p>
//           </div>
//         </form>
//       </div>
//       </div>
        
//     )
// }

// export default Login;

import { useState } from "react";
import axios from 'axios';
import './login.css';
import { useNavigate } from "react-router-dom";
import userloginimage from '../assets/userloginimage.jpg';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }

  const handlePwd = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password
      });
  
      if (response.status === 200) {
        console.log('Login successful');
        console.log(response.data); // You may want to inspect the response data
        localStorage.setItem("token",response.data.token)
        // Navigate to the desired page upon successful login
        navigate('/nav');
      } else {
        console.log('Login unsuccessful');
        // Handle other status codes or error conditions if needed
      }
    } catch (error) {
      console.error('Login failed', error);
      // Handle network errors or other exceptions
    }
  };
  
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.username = "Email is Required";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

    if (!values.password) {
      errors.password = "Password is Required";
      setIsSubmit(false);
    }  else {
      setIsSubmit(true);
    }

    return errors;
  }

  return (
    <div className="backq" style={{ backgroundImage: `url(${userloginimage})` }} >
      <div className="logq">
        <form onSubmit={handleSubmit}>
          <br />
          <center><h1 className="h1n">LOGIN</h1></center>
          <div className="inputbq">
            <label name="uname">Email</label>
            <input className="inp1" type="email" value={email} onChange={handleName} required id="uname" />
          </div>
          <div className="inputbq">
            <label name="pass">Password</label>
            <input className="inp1"type="password" required id="pass" value={password} onChange={handlePwd} />
          </div>
          <center>
            <button className="butq" type="submit">Login</button>
          </center>
          <br />
          <div className="regq">
            <p>Do not have an account? <Link to="/Signup"><a href="#">Register</a></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
