import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Review.css'
function Review() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.get('http://localhost:8080/contacts/gety', {
        headers: {
          Authorization: `Bearer ${token}`,  // Corrected string interpolation
        },
      });

      console.log('Fetched data:', response.data);

      // Update the state with the modified data
      setServicesData(response.data);
      // Update the state with the fetched data
      // setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };
  return (
    <div>
      <div className="clasb">
      <nav className="navopu">
            <div className="navlinksopu">
            <Link to={"/Adminnav"}>Home</Link>
            <Link to={"/Admindash"}>Applied</Link>
            <Link to={"/Addloann"}>Loans</Link>
            <Link className='underopu'to="#">Review</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>
        <div className='adminbackb'>
          <div className='viewbackb'>
                <center>
                  <h2 className='h2adb'>FEEDBACK</h2>
                </center>
            <div className="viewsb">
              <section id="viewb">
                <table className='admintableb'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Suggestion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;