import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar'>
      <h1><Link to='/'>Portfolio</Link></h1>
      <ul className={ toggle ? 'active' : ''}>
        <li><Link to='/' onClick={()=>{setToggle(!toggle)}}>Home</Link></li>
        <li><Link to='/about' onClick={()=>{setToggle(!toggle)}}>About</Link></li>
        <li><Link to='/projects' onClick={()=>{setToggle(!toggle)}}>Projects</Link></li>
      </ul>
      <button 
        className='btn-toggle'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <AiOutlineMenu size={32} />
      </button>
    </nav>
  )
}
