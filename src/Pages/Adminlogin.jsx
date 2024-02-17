import { useState,} from "react";
import './Adminlogin.css';
import axios from "axios";
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
import {Link,useNavigate} from "react-router-dom"
import userloginimage from '../assets/userloginimage.jpg'
const Adminlogin=()=>{

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const navigate=useNavigate();
    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
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
    
        
    console.log(response.data);
          if(email==="admin@gmail.com" && password==="admin@123"){
            localStorage.setItem("token",response.data.token)
            navigate('/Adminnav');
        }
        else {
          window.alert("invalid");
          // Handle other status codes or error conditions if needed
        }
      } catch (error) {
        console.error('Login failed', error);
        // Handle network errors or other exceptions
      }
    };
    

    const validate=(values)=>{
        const errors={};

        if(!values.email){
        errors.username="Email is Required";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else{
            setIsSubmit(true);
        }
        return errors;
    }    
    return(
      <div className="backq25" style={{ backgroundImage:`url(${userloginimage})` }} >
      <div className="logq25">
        <form onSubmit={handleSubmit}>
        <center><h1 className="h1n25">LOGIN</h1>
       </center>
       <p>  </p>
          <div className="inputbq25">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
            <div className="inputbq25">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <center>
         <button className="butq25" type="submit" >
              Login
            </button>
          </center>
          <br></br>
          <br></br>
          <div className="regq25">
          <p className="adminsolo">Growing , Harvesting Dreams</p>
          </div>
        </form>
      </div>
      </div>
        
    )
}

export default Adminlogin;