
import './Nav.css'; 
import {Link} from "react-router-dom"
import userhomeimage from '../assets/userhomeimage.jpg'
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
const Nav = () => {
  
  
  return (
    <div className="home"style={{ backgroundImage:`url(${userhomeimage})` }} >
      <nav className="navff">
            <div className="content">
                <h2>Agera</h2>
                <h2>Agera</h2>
            </div>
            <div className="navlinksff">
           <p className='underff'> <Link to="#">Home</Link></p>
            <Link to={"/Services"}>Services</Link>
            <Link to={"/Status"}>Contact us</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>

      <section >
        <div id='main-content'>
            <h1>#Agrofunds</h1>
            <br></br>
            <br></br>
            <div className='section2'>
                We transform 
                the <br></br>Agriculture<br></br>
                World
            </div>
            <br></br>
            <div className='section1'>
                We invest in developing and scaling up innovative support structure for farmers and smallholder
                that provide modern solution and otion for sustanbly earning reiable income from their hardwork
            </div>
            <br></br>
            <div className='section3'>
          {/* <button className="regwbutq" type="submit" >
              EXPLORE
            </button> */}
            </div>
        </div>
        
        <section className="hero" id="hero">
      <div className="section__container hero__container">
        <div className="hero__card">
          <span><img src={icon1} alt="hero" /></span>
          <h4>Healthy Lifestyle</h4>
          <p>
            Embrace a healthy lifestyle through the transformative power of yoga
            and cultivate physical vitality and inner peace.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon2} alt="hero" /></span>
          <h4>Body & Mind Balance</h4>
          <p>
            Through purposeful poses and mindful breathing, yoga cultivates a
            strong, flexible body while nurturing inner calm.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon3} alt="hero" /></span>
          <h4>Meditation Practice</h4>
          <p>
            Discover inner serenity and mindfulness as you cultivate a profound
            connection with the present moment.
          </p>
        </div>
      </div>
    </section>
       
     </section>
    </div>
  );
}

export default Nav;
