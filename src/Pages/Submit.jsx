
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; 
// import './Submit.css';

// function Submit() {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []); 

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       const response = await axios.get('http://localhost:8080/registration-forms/all', {
//         headers: {
//           Authorization: `Bearer ${token}`,  
//         },
//       });

//       console.log('Fetched data:', response.data);

//       setServicesData(response.data);
//     } catch (error) {
//       console.error('Fetching data failed:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     const isConfirmed = window.confirm('Are you sure you want to delete this loan?');

//     if (!isConfirmed) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.delete(
//         `http://localhost:8080/registration-forms/delete/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'cache-control': 'no-cache',
//           },
//         }
//       );

//       console.log(response.data);

//       if (response.status === 204) {
//         setServicesData((prevData) => prevData.filter((item) => item.id !== id));
//       } else {
//         console.error('Error deleting form. Status:', response.status);
//       }
//     } catch (error) {
//       console.error('Error deleting form:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="clas">
//         <div className='adminback'>
//           <div className='viewback'>
//             <div className="views">
//               <section id="view">
//                 <center>
//                   <h2 className='h2ad'>Loans</h2>
//                 </center>
//                 <table className='admintable'>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Loan Name</th>
//                       <th>Email</th>
//                       <th>Address</th>
//                       <th>Phone Number</th>
//                       <th>Aadhar Number</th>
//                       <th>Pan Number</th>
//                       <th>Applicant Salary</th>
//                       <th>Loan Amount</th>
//                       <th>Action</th> 
//                       <th>Action</th> 
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {servicesData.map((service, index) => (
//                       <tr key={index}>
//                         <td>{service.id}</td>
//                         <td>{service.fullName}</td>
//                         <td>{service.loanName}</td>
//                         <td>{service.email}</td>
//                         <td>{service.streetAddress}</td>
//                         <td>{service.phoneNumber}</td>
//                         <td>{service.aadhaarNumber}</td>
//                         <td>{service.panNumber}</td>
//                         <td>{service.applicantSalary}</td>
//                         <td>{service.loanAmountRequired}</td>
//                         <td>
//                           <Link to={`/Profileinfo`}>
//                             <button className='something'>Update</button>
//                           </Link>
//                         </td>
//                         <td>
//                           <button className='something2' onClick={() => handleDelete(service.id)}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Submit;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Submit.css';
import backb from '../assets/backb.png';

function Submit() {
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

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this loan?');

    if (!isConfirmed) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `http://localhost:8080/registration-forms/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );

      console.log(response.data);

      if (response.status === 204) {
        setServicesData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error('Error deleting form. Status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  return (
<div>
    <div className="clasgh">
    <nav className='reo3'>
          <Link to='/Services'>
            <img className='huy'src={backb} alt='back' />
          </Link>
        </nav>
        <nav className='navi4'>
      <p > < Link to="/Services" >Loan</Link></p>
      <p className="no-hover" > <Link to="/Submit">My Loans</Link></p>
      <p>  <Link to="/Approve">Status</Link></p>
      </nav>
      <div className='adminbackgh'>
        <div className='viewbackgh'>
          <div className="viewsgh">
            <section id="viewgh">
              <center>
                {/* <div className='h2adgh'>LOANS</div> */}
              </center>
              <div className="card-container">
                {servicesData.map((service, index) => (
                  <div className="card" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{service.fullName}</h5>
                      <p className="card-text"><strong>ID:</strong> {service.id}</p>
                      <p className="card-text"><strong>Email:</strong> {service.email}</p>
                      <p className="card-text"><strong>Loan Name:</strong> {service.loanName}</p>
                      <p className="card-text"><strong>Address:</strong> {service.streetAddress}</p>
                      <p className="card-text"><strong>Phone Number:</strong> {service.phoneNumber}</p>
                      <p className="card-text"><strong>Aadhar Number:</strong> {service.aadhaarNumber}</p>
                      <p className="card-text"><strong>Pan Number:</strong> {service.panNumber}</p>
                      <p className="card-text"><strong>Applicant Salary:</strong> {service.applicantSalary}</p>
                      <p className="card-text"><strong>Loan Amount:</strong> {service.loanAmountRequired}</p>
                      {/* Add other fields as needed */}
                      <Link to={`/Profileinfo`}>
                        <button className='something'>Update</button>
                      </Link>
                      <button className='something2' onClick={() => handleDelete(service.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Submit;


