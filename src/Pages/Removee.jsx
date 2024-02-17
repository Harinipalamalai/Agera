import React, { useState } from 'react';
import './Remove.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Removee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    action: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  let token = localStorage.getItem('token');
  console.log('Token:', token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/registration-forms/updateStatus`,
        {
          id: formData.id,
          action: formData.action,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );

      console.log(response.data);
      // Add any additional logic or navigation if needed
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className='apply26g'>
          <nav className="navghs">
            <div className="navlinksghs">
            <Link to={"/Adminnav"}>Home</Link>
            <Link to={"/Addloann"}>Loans</Link>
         <Link to="#">Applied</Link>
            <Link className='underghs' to={"/Removee"}>Approval</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>
      <section className='container26g'>
        <header>Approve Loan</header>
        <form className='form26g' onSubmit={handleSubmit}>
          <div className='input-box26g'>
            <label>ID</label>
            <br />
            <input
              type='text'
              name='id'
              placeholder='Enter id'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box26g'>
            <label>Action</label>
            <br />
            <input
              type='text'
              name='action'
              placeholder='Enter action'
              value={formData.action}
              onChange={handleChange}
              required
            />
          </div>
          <button className='msg' type='submit'>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Removee;
