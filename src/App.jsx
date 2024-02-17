
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import First from './Pages/First'
import Signup from './Pages/signup'
import Login from './Pages/Login'
import Nav from './Pages/nav'
import Services from './Pages/Services'
import Apply from './Pages/Apply'
import Doc from './Pages/doc'
import Submit from './Pages/Submit'
import Adminlogin from './Pages/Adminlogin';
import Admindash from './Pages/Admindash';
import Status from './Pages/Status';
import Profileinfo from './Pages/Profileinfo';
import Details from './Pages/Details';
import Removee from './Pages/Removee';
import Adminnav from './Pages/Adminnav';
import Applyform from './Pages/Applyform';
import Addloann from './Pages/Addloann';
import Review from './Pages/Review';
import Approve from './Pages/Approve';
function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<First/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/nav" element={<Nav/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Apply" element={<Apply/>}/>
            <Route path="/doc" element={<Doc/>}/>
            <Route path="/Submit" element={<Submit/>}/>
            <Route path="/Adminlogin" element={<Adminlogin/>}/>
            <Route path="/Admindash" element={<Admindash/>}/>
            <Route path="/Status" element={<Status/>}/>
            <Route path="/Profileinfo" element={<Profileinfo/>}/>
            <Route path="/Details" element={<Details/>}/>
            <Route path="/Removee" element={<Removee/>}/>
            <Route path="/Adminnav" element={<Adminnav/>}/>
            <Route path="/Applyform" element={<Applyform/>}/>
            <Route path="/Addloann" element={<Addloann/>}/>
            <Route path="/Review" element={<Review/>}/>
            <Route path="/Approve" element={<Approve/>}/>

          </Routes>
        </Router>
       
    
      </div>
      
    </>
  )
}

export default App
