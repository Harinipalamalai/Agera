import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Approve.css';
import { Link } from 'react-router-dom';
import backb from '../assets/backb.png';

function Approve() {
  const [approvedServicesData, setApprovedServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApprovedData();
  }, []);

  const fetchApprovedData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found. Please log in again.');
      }

      const response = await axios.get('http://localhost:8080/registration-forms/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched approved data:', response.data);

      setApprovedServicesData(response.data);
    } catch (error) {
      console.error('Fetching approved data failed:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
    
        <div className="clasnm">
        <nav className='reo3'>
          <Link to='/Services'>
            <img className='huy'src={backb} alt='back' />
          </Link>
        </nav>
        <nav className='navi4'>
      <p > < Link to="/Services" >Loan</Link></p>
      <p > <Link to="/Submit">My Loans</Link></p>
      <p className="no-hover">  <Link to="/Approve">Status</Link></p>
      </nav>
         <div className='adminbacknm'>
            <div className='viewbacknm'>
              <div className="viewsnm">
                <section id="viewnm">
                  <center>
                    <h2 className='h2adnm'>Approved Loans</h2>
                  </center>
                  <table className='admintablenm'>
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
                      {approvedServicesData.map((service, index) => (
                        <tr key={index}>
                          <td>{service.id}</td>
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

export default Approve;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Approve.css';

// const Approve = () => {
//   const [approvedServicesData, setApprovedServicesData] = useState([]);

//   const fetchApprovedData = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("Token not found. Please log in again.");
//       }

//       const response = await axios.get("http://localhost:8080/registration-forms/approved", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Fetched approved data:", response.data);

//       setApprovedServicesData(response.data);
//     } catch (error) {
//       console.error("Fetching approved data failed:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchApprovedData();
//   }, []);

//   return (
//     <div>
//       <h2>Approved Services</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Service ID</th>
//             <th>Service Name</th>
//             <th>Service Description</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {approvedServicesData.map((service) => (
//             <tr key={service.id}>
//               <td>{service.id}</td>
//               <td>{service.serviceName}</td>
//               <td>{service.serviceDescription}</td>
//               <td>{service.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Approve;
