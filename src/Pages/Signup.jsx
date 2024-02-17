// import { useState,} from "react";
// import './Signup.css';
// import { Link } from "react-router-dom";
// const Signup=()=>{

//     const [email, setEmail] = useState("");
//     const [user, setUsername] = useState("");
//     const [password, setPassword] = useState("");
   
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//   };
//     return(
//       <div className="back">
//       <div className="log">
//         <form onSubmit={handleSubmit}>
//         <center><h1 className="h1n">REGISTER</h1>
//        </center>
//        <p>  </p>
//        <div className="inputb">
//             <label name="uname1">Username</label>
//             <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} required id="uname" />
//           </div>

//           <div className="inputb">
//             <label name="uname">Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
//           </div>
//           <p  style={{color:"white",fontSize:"17px"}}></p>      
//             <div className="inputb">
//             <label name="pass">Password</label>
//             <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
//           </div>
//           <p  style={{color:"white",fontSize:"17px"}}></p>   
//           <center>
//           <p className=" ruba">Already have a account?<Link to={'/login'}> <a  className='ruba2' href="#">Login</a></Link></p>
//           <br></br>
//            <button className="but1" type="submit" >
//               Signup
//             </button>
//           </center>
//         </form>
//       </div>
//       </div>
//     )
// }
// export default Signup;
import { useState } from "react";
import './Signup.css';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = {
      email,
      name:user,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      

      // Handle the response, e.g., redirect to a different page
      console.log(response.data);
      navigate('/Login');

    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="back">
      <div className="log">
        <form onSubmit={handleSubmit}>
          <center>
            <h1 className="h1n">REGISTER</h1>
          </center>
          <p> </p>
          <div className="inputb">
            <label name="uname1">Username</label>
            <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} required id="uname" />
          </div>
          <div className="inputb">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p style={{ color: "white", fontSize: "17px" }}></p>
          <div className="inputb">
            <label name="pass">Password</label>
            <input type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* <p style={{ color: "white", fontSize: "17px" }}></p> */}
          <center>
            <p className="ruba">Already have an account?
              <Link to={'/login'}>
                <a className='ruba2' href="#">Login</a>
              </Link>
            </p>
            <br></br>
            <button className="but1" type="submit">
              Signup
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Signup;
