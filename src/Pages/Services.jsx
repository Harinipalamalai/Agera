import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import homeic from '../assets/homeic.png';
import './Services.css'

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using Axios and the access token
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:8080/applies/gety'; // Replace with your actual API endpoint
        const accessToken = localStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        };

        const response = await axios.get(apiUrl, { headers });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const agricultureImages = [
    'https://img.freepik.com/free-photo/tractor-field-ai-generated-image_268835-6450.jpg?t=st=1706292829~exp=1706296429~hmac=e34568904fa38810b992d7b75551c7421a8b195e7247ea43d62f70b432b0983a&w=1800',
  'https://img.freepik.com/free-photo/plant-growing-soil-with-sun-shining-it_1340-38891.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated',
  'https://img.freepik.com/free-photo/photorealistic-lohri-festival-with-man-celebrating_23-2151098192.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated',
  'https://images.pexels.com/photos/19460850/pexels-photo-19460850/free-photo-of-men-working-in-the-field-during-harvest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  'https://img.freepik.com/free-photo/organic-farm-harvests-fresh-fruit-vegetables-generated-by-ai_188544-36467.jpg?t=st=1706294658~exp=1706298258~hmac=c6e59c75ff88077c0501d0d77dfe8b799ca5c1c6111e2c44d271d7a47045ea94&w=2000',
  'https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027604.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated'
  // Add more image URLs as needed
]; // The empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className='services-container'>
      <nav>
        <Link to='/nav'>
          <img className='homeicon' src={homeic} alt="home-icon" />
        </Link>
      </nav>
      <nav className='navi4'>
      <p className="no-hover"> < Link to="#" >Loan</Link></p>
      <p> <Link to="/Submit">My Loans</Link></p>
      <p>  <Link to="/Approve">Status</Link></p>
      </nav>
      <div className='academy'>
        <main>
          <div className="about-me">
            {data.map((item, index) => (
              <div key={index} className={`event${index + 1}`}>
    <img src={agricultureImages[index % agricultureImages.length]} alt={`event-${index + 1}`} />
                <p className='para'>{item.description}</p>
                <Link to='/Apply'>
                  <button className='button-33'>APPLY NOW</button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;

