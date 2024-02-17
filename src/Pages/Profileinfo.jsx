import React, { useState } from 'react';
import axios from 'axios';
import './Profileinfo.css';
import regiamge from '../assets/regiamge.jpg';
import { useNavigate } from 'react-router-dom';
import backb from '../assets/backb.png';
import { Link } from 'react-router-dom';

const Profileinfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '', 
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(
        `http://localhost:8080/registration-forms/update/${formData.id}`,
        {
          id: formData.id,
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
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );
  
      console.log(response.data);
  
      if (response.status === 200) {
        navigate('/Submit');
      } else {
        console.error('Error updating form. Status:', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className='apply26v' style={{ backgroundImage: `url(${regiamge})` }}>
        <nav className='reo2'>
          <Link to='/Submit'>
            <img className='huy'src={backb} alt='back' />
          </Link>
        </nav>
      <section className='container26v'>
        <header>UPDATE LOAN</header>
        <br></br>
        <form className='form26v' onSubmit={handleSubmit}>
          <div className='input-box26v'>
            <label>User ID</label>
            <input
              type='text'
              name='id'
              placeholder='Enter user ID'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box26v'>
            <label>Full Name</label>
            <input
              type='text'
              name='fullName'
              placeholder='Enter full name'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            </div>
            <div className='input-box26v'>
              <label>Loan Name</label>
            <input
              type='text'
              name='loanName'
              placeholder='Enter loan name'
              value={formData.loanName}
              onChange={handleChange}
              required
            />
          </div>
          
<div className='input-box26v'>
  <label>Email Address</label>
  <input
    type='text'
    name='email'
    placeholder='Enter email address'
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>
<div className='column26v'>
  <div className='input-box26v'>
    <label>Phone Number</label>
    <input
      type='number'
      name='phoneNumber'
      placeholder='Enter phone number'
      value={formData.phoneNumber}
      onChange={handleChange}
      required
    />
  </div>
  <div className='input-box26v'>
    <label>Birth Date</label>
    <input
      type='date'
      name='birthDate'
      placeholder='Enter birth date'
      value={formData.birthDate}
      onChange={handleChange}
      required
    />
  </div>
</div>
<div className='input-box26v'>
  <label>Gender</label>
  <input
    type='text'
    name='gender'
    placeholder='Enter your gender'
    value={formData.gender}
    onChange={handleChange}
    required
  />
</div>
<div className='input-box26v address26v'>
  <label>Address</label>
  <input
    type='text'
    name='streetAddress'
    placeholder='Enter street address'
    value={formData.streetAddress}
    onChange={handleChange}
    required
  />
  <div className='column26v'>
    <input
      type='text'
      name='city'
      placeholder='Enter your city'
      value={formData.city}
      onChange={handleChange}
      required
    />
  </div>
  <div className='column262v'>
    <input
      type='text'
      name='region'
      placeholder='Enter your region'
      value={formData.region}
      onChange={handleChange}
      required
    />
    <input
      type='number'
      name='postalCode'
      placeholder='Enter postal code'
      value={formData.postalCode}
      onChange={handleChange}
      required
    />
  </div>
</div>
<br />
<div className='input-box262v'>
  <label>Proof Details</label>
  <br />
  <input
    type='number'
    name='aadhaarNumber'
    placeholder='Enter Applicant Aadhaar Number'
    value={formData.aadhaarNumber}
    onChange={handleChange}
    required
  />
  <input
    type='number'
    name='panNumber'
    placeholder='Enter Applicant Pan Number'
    value={formData.panNumber}
    onChange={handleChange}
    required
  />
  <input
    type='number'
    name='applicantSalary'
    placeholder='Enter Applicant Salary'
    value={formData.applicantSalary}
    onChange={handleChange}
    required
  />
  <input
    type='number'
    name='loanAmountRequired'
    placeholder='Enter Loan Amount Required'
    value={formData.loanAmountRequired}
    onChange={handleChange}
    required
  />
</div>
          <div className='input-box262v'>
            <button className='jojov' type='submit'>UPDATE</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profileinfo;

