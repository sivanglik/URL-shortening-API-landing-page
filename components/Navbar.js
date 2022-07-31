import react, { useState } from 'react'
import './App.css'
import LOGO from './images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () =>{

    const[isOpen,setisOpen] = useState(false)
    return(
            
            <div className='navbar' >
                    <div className='logo'>
                        <img src={LOGO} alt='' />   
                    </div>
                    <div className={isOpen ? 'menu-resp':'menu'} >
                        <ul className='nav-menu'>
                            <li><a href=''>Features</a></li>
                            <li><a href=''>Pricing</a></li>
                            <li><a href=''>Resources</a></li>
                        </ul>
               
                     
                        <ul className='right-nav'>
                            <li className='login' ><a className='login' href=''>Login</a></li>
                            <li className='signup'>< a className='signup' href=''>Sign Up</a></li>
                        </ul>
                    </div>
                  {
                    isOpen ? 
                    <AiOutlineClose className='hamburger' id='close' onClick={()=>setisOpen(!isOpen)}/> :
                   <GiHamburgerMenu  className='hamburger' onClick={()=>setisOpen(!isOpen)}/> 

                  }
                        
                        
            </div>   
    )
}
export default Navbar