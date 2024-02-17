import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Admindash.css'
function Admindash() {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []); 
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.get('http://localhost:8080/registration-forms/all', {
        headers: {
          Authorization: `Bearer ${token}`,  
        },
      });

      console.log('Fetched data:', response.data);

      setServicesData(response.data);
   
    } catch (error) {
      console.error('Fetching data failed:', error);
    }
  };
  return (
    <div>
      <div className="clas">
      <nav className="navgh">
            <div className="navlinksgh">
            <Link to={"/Adminnav"}>Home</Link>
            <Link to={"/Addloann"}>Loans</Link>
         <Link className='undergh'to="#">Applied</Link>
            <Link to={"/Removee"}>Approval</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>
        <div className='adminback'>
          <div className='viewback'>
            <div className="views">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Applied Loans</h2>
                </center>
                <table className='admintable'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Loan Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                      <th>Aadhar Number</th>
                      <th>Pan Number</th>
                      <th>Applicant Salary</th>
                      <th>Loan Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData.map((service, index) => (
                      <tr key={index}>
                        <id>{service.id}</id>
                        <td>{service.fullName}</td>
                        <td>{service.loanName}</td>
                        <td>{service.email}</td>
                        <td>{service.streetAddress}</td>
                        <td>{service.phoneNumber}</td>
                        <td>{service.aadhaarNumber}</td>
                        <td>{service.panNumber}</td>
                        <td>{service.applicantSalary}</td>
                        <td>{service.loanAmountRequired}</td>
                        <td>{service.status}</td>
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

export default Admindash;

