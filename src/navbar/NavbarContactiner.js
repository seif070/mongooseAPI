import React from 'react'
import './Navbar.css'

 const NavbarContactiner = ({auth,logout}) => {
  return (
    <div className='navmenu'> <a href='#'>Home</a>
    <a href='#'>Blog</a>
    <a href='#'>Work</a>
    <a href='#'>About</a>
<button variant="outline-secondary" onClick={()=>logout()}>logout</button>

    </div>
  )
}
 export default NavbarContactiner