import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Addloan.css';
import { Link } from 'react-router-dom';

function Addloann() {
  const [servicesData, setServicesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

      const response = await axios.get('http://localhost:8080/applies/gety', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched data:', response.data);
      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      await axios.delete(`http://localhost:8080/applies/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setServicesData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Deleting data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = servicesData.filter((service) =>
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="clastt">
      <nav className="navop">
            <div className="navlinksop">
            <Link to={"/Adminnav"}>Home</Link>
            <Link className='underop'to="#">Loans</Link>
            <Link to={"/Admindash"}>Applied</Link>
            <Link to={"/Removee"}>Approval</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>
        <div className='adminbacktt'>
          <div className='viewbacktt'>
            <div className="viewstt">
              <section id="viewtt">
                <center>
                  <h2 className='h2adtt'>Loans</h2>
                  <input
                  className='serchtt'
                    type="text"
                    placeholder="Search by description"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                 <Link to={"/Applyform"}><button className='addbtt'>Add Loan</button></Link>
                </center>
                <table className='admintablett'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((service) => (
                      <tr key={service.id}>
                        <td>{service.id}</td>
                        <td>{service.description}</td>
                        <td>
                          <button onClick={() => handleDelete(service.id)}>Delete</button>
                        </td>
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
export default Addloann;
