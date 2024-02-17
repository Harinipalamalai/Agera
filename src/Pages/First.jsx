import React from 'react';
import './First.css';
import user from '../assets/user.png'
import admin from '../assets/admin.png'
import { Link } from 'react-router-dom';
import frontimage from '../assets/frontimage.webp'
const First = () => {
  return (
    <div style={{ backgroundImage:`url(${frontimage})` }} className="centeredContainer">
      <section>
        <div className='ha'>
          <p className='centeredText'>AGERA</p>
         <p className='ba'>Growing Dreams, Harvesting Futures</p>
         <br></br>
         <p>----------------------------------------------------------------------------</p>
         <br></br>
         <br></br><br></br>
         <Link to={'/login'}> <button className="userbut" type="submit" >
          <img className='kaya' src={user}></img>
              USER
            </button></Link>
            <br></br>
            <br></br>
           <Link to={'/Adminlogin'}> <button className="Adminbut" type="submit" >
           <img className='kaya' src={admin}></img>
              ADMIN
            </button></Link>
        </div>
      </section>
    </div>
  );
};

export default First;