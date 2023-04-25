import React from 'react';
import '../styles/navbar.css';
import {NavLink,Link} from 'react-router-dom'
import { Search } from '@material-ui/icons';


const Navbar = ({size, setShow}) => {
  return (
    <nav>
         <header className="header-top-strip py-2">
      <div className="container-xxl">
      <div className='upper-menu-links'>
              <div className="d-flex align-items-center gap-15 ">
                <NavLink to='/' className='upper-links'>Help Center</NavLink>
                <NavLink to='/' className='upper-links'>Gifts Certificates</NavLink>
                <NavLink to='/' className='upper-links'>Our Brands</NavLink>
                <NavLink to='/contact' className='upper-links'>Become a seller</NavLink>
              </div>
            </div>
      </div>
    </header>
    <header className="header-upper py-2">
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-1-auto">
        <Link className=' icon'>
                  <img src ="images/hamburger.PNG" alt="" /></Link>
        </div>
      
        <div className="col-2 logo-icon">
        <span className="my_shop" onClick={()=>setShow(true)}>
              <img src ="images/logo.PNG" alt="" width="200" height="50"/>
             </span>
         
            </div>
          <div className="col-5"> 
          <div class="input-group">
            <input type="text" class="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2"> <Search /></span>
            </div></div>
            <div className='col-2'>
              <p className='text-black mb-0'>
              <img src ="images/call.PNG" alt="" width="32" height="32"/> <a href='9817112439' className=''>9817112439</a>
              </p>
            </div>
            <div className="col-2">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link>
                <img src='/images/bar-chart.PNG' alt=''></img>
                </Link>
              </div>
              <div>
                <Link to='/heart'>
                <img src='/images/heart.PNG' alt=''></img>
                </Link>
              </div>
              <div>
                <Link>
                <img src='/images/user.PNG' alt=''></img>
                </Link>
              </div>
              <div>
                
              <div className="cart" onClick={()=>setShow(false)}>
                <span>
                <img src='/images/shopping-cart.PNG' alt=''></img>
                </span>
                <span>{size}</span>
            </div>
                
              </div>
             
              
              </div>
            </div>
          </div>
        </div>
    
    </header>
    <header className="header-bottom py-2">
      <div className="container-xxl">
        <div className="col-12">
          <div className="menu-bottom d-flex align-items-center gap-30">
            <div>
                        
            </div>
            <div className='menu-links'>
              <div className="d-flex align-items-center gap-15">
                <NavLink to='/'>
                <img src='/images/camera.PNG' width='30' height='30' className='navbar-icons-img' alt=''></img>
                  Electronics
                <img src='/images/down-arrow.PNG' alt=''>
                </img>
                </NavLink>
                <NavLink to='/'>
                <img src='/images/sofa.PNG' width='30' height='30' className='navbar-icons-img' alt=''></img>

                  Home Decor & Furnishing
                <img src='/images/down-arrow.PNG' alt=''>

                </img>
                </NavLink>
                <NavLink to='/'>
                <img src='/images/essentials.PNG' className='navbar-icons-img' width='30' height='30' alt=''></img>
                  
                  Daily Essentials
                <img src='/images/down-arrow.PNG' alt=''></img>
                </NavLink>
                <NavLink to='/contact'>
                <img src='/images/football.PNG' width='30' height='30' className='navbar-icons-img' alt=''></img>
                  
                  Sports & Outdoor
                <img src='/images/down-arrow.PNG' alt=''></img>
                </NavLink>
                <NavLink to='/contact'>
                <img src='/images/dress.png' width='30' height='30' className='navbar-icons-img' alt=''></img>
                  
                  Women's Wear
                <img src='/images/down-arrow.png' alt=''></img>
                </NavLink>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </header>
    <div>
            <img src='/images/slider.PNG' alt='' className= 'slider-img'></img>
            </div>
        {/* <div className="nav_box ">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
             </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div> */}
    </nav>
  )
}

export default Navbar