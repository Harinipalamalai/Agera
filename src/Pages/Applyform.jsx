import React, { useState } from 'react';
import axios from 'axios';
import './Applyform.css'

function Applyform() {
  const [paragraph, setParagraph] = useState('');

  const handleInputChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiUrl = 'http://localhost:8080/applies/add';
  
      // Retrieve accessToken from localStorage
      const accessToken = localStorage.getItem('token');
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      };
  
      // Adjust the data object to use 'description' instead of 'paragraph'
      const data = {
        description: paragraph,
      };
  
      // Make the POST request using Axios
      const response = await axios.post(apiUrl, data, { headers });
  
      console.log('API Response:', response.data);
  
      // Reset the input after successful submission
      setParagraph('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  return (
    <div className="apply-form-containerty">
    <form onSubmit={handleSubmit} className="apply-formty">
      <label className="form-labelty">
        Add Loans
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder='add loan details'
          value={paragraph}
          onChange={handleInputChange}
          className="form-input"
        />
      </label>
     <center> <button type="submit" className="form-buttonty">
        Add
      </button>
      </center>
    </form>
  </div>
  );
}

export default Applyform;
