import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Apply.css';
import { useNavigate } from 'react-router-dom';
import backb from '../assets/backb.png';


const Apply = () => {
  
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    loanName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    aadhaarNumber: '',
    panNumber: '',
    applicantSalary: '',
    loanAmountRequired: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  let token=localStorage.getItem('token')
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/registration-forms/submit', {
        fullName: formData.fullName,
        loanName: formData.loanName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        birthDate: formData.birthDate,
        gender: formData.gender,
        streetAddress: formData.streetAddress,
        city: formData.city,
        region: formData.region,
        postalCode: formData.postalCode,
        aadhaarNumber: formData.aadhaarNumber,
        panNumber: formData.panNumber,
        applicantSalary: formData.applicantSalary,
        loanAmountRequired: formData.loanAmountRequired,
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );

      console.log(response.data);
navigate('/Services')
     
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  }
  
  return (
    <div>
    <div className='apply26' >  
      <nav className='reo'>
          <Link to='/Services'>
            <img src={backb} alt='back' />
          </Link>
        </nav>
    
      <section className="container26">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form26">
       
<div className="input-box26">
  <label>Full Name</label>
  <input
    type="text"
    placeholder="Enter full name"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    required
  />
</div>
<div className="input-box26">
  <label>loan Name</label>
  <input
    type="text"
    placeholder="Enter loan name"
    name="loanName"
    value={formData.loanName}
    onChange={handleChange}
    required
  />
</div>
<div className="input-box26">
  <label>Email</label>
  <input
    type="text"
    placeholder="Enter your email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>
<div className="column26">
  <div className="input-box26">
    <label>Phone Number</label>
    <input
      type="number"
      placeholder="Enter phone number"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      required
    />
  </div>
  <div className="input-box26">
    <label>Birth Date</label>
    <input
      type="date"
      placeholder="Enter birth date"
      name="birthDate"
      value={formData.birthDate}
      onChange={handleChange}
      required
    />
  </div>
</div>
<div className="input-box26">
  <label>Gender</label>
  <input
    type="text"
    placeholder="Enter your gender"
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
  />
</div>
<div className="input-box26 address26">
  <label>Address</label>
  <input
    type="text"
    placeholder="Enter street address"
    name="streetAddress"
    value={formData.streetAddress}
    onChange={handleChange}
    required
  />
  <div className="column26">
    <input
      type="text"
      placeholder="Enter your city"
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
    />
  </div>
  <div className="column262">
    <input
      type="text"
      placeholder="Enter your region"
      name="region"
      value={formData.region}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      placeholder="Enter postal code"
      name="postalCode"
      value={formData.postalCode}
      onChange={handleChange}
      required
    />
  </div>
</div>
{/* Other input fields... */}
<br></br>
          <div className="input-box262">
            <label>Proof Details</label>
            <br></br>
            <input
              type="number"
              placeholder="Enter Applicant Aadhaar Number"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Applicant Pan Number"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Applicant Salary"
              name="applicantSalary"
              value={formData.applicantSalary}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Loan Amount Required"
              name="loanAmountRequired"
              value={formData.loanAmountRequired}
              onChange={handleChange}
              required
            />
          </div>
          <button className="upup"type="submit">NEXT</button>
        </form>
      </section>
     </div>
    </div>
  );
};

export default Apply;
