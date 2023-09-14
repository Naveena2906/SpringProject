import React from 'react'
import "./Landing.css";
  import video from './video.mp4';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    {/* <Navbar/> */}
    <div className='library'>
       {/* < video className='videotag' autoPlay loop muted><source src={video} type='video/mp4'/></video>  */}
      {/* <video src='video.mp4'/> */}
      
      
      <div className='video'>
      <video src={video} autoPlay muted loop class="video-bg"/>
      <div className='bg-overlay'></div>
      <div className='navbar'>
        <div className='menu'>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <div className='video-text' ><Link to='/l' style={{textDecoration:'none'}} >Login </Link>
        </div>
        <div className='video-text1'><Link to='/s' style={{textDecoration:'none'}}> Sign Up</Link>
        </div>
          </div>
          <div className='home-text'>
              <h2>BOOKS </h2> 
              <p>A Book is a collection of materials or media that are accessible for use and not 
          just for display purposes.It help keep track of their documents inventory and loans, and member subscriptions and profiles for physical locations.Books also broaden our thinking and make us more open to modern thinking A library is a place
         where books and sources of information are stored</p>
              {/* <p>Reading books help us to think more </p> */}
          </div>
       <div className='home-btn' ><Link to='/l' style={{textDecoration:'none'}}>EXPLORE </Link>  </div>  
        </div>
      
    </div>

    
    {/* <div className="homedatas">
        <div className="homedatas_text">
          <h2 className="title" style={{fontFamily:'sans-serif',fontSize:'40px' ,color:'white'}}>CinePhile</h2>
          <h2 className="title1" style={{fontFamily:'sans-serif',fontSize:'35px',color:'white'}}>Art of Exhilarating</h2>
          <h2 className="title2" style={{fontFamily:'sans-serif',fontSize:'35px',color:'white'}}>Deep dive in cinematic universe</h2>
          <Button className="homebtn" variant="contained" color="success" onClick={Login}>Get Started</Button>
        </div> */}
        {/* <img
          className="homeimage"
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg"
        ></img> */}
      {/* </div> */}
      < div className="homemovie">
        <img className="hm1" src="https://rukminim1.flixcart.com/image/1664/1664/regionalbooks/h/c/g/ponniyin-selvan-part-1-to-5-original-imad6vsfubujwqzf.jpeg?q=90"></img>
        <img className="hm1" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501121968/the-sun-also-rises-9781501121968_hr.jpg"></img>
        <img className="hm1" src="http://prodimage.images-bn.com/pimages/9780333791776_p0_v2_s1200x630.jpg"></img>
        <img className="hm1" src="https://i.pinimg.com/originals/01/f5/84/01f5841fdd67a026e4a7fa1bc823f59e.jpg"></img>
        <img className="hm1" src="https://images.gr-assets.com/books/1369654557l/17981797.jpg"></img>
        {/* <img className='hm1' src='https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/mzf800.jpg'></img> */}
      </div>









    </>
    
  );
};

export default Landing