import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark'>

    <a href="" className='navbar-brand'>Logo</a>

    <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle="collapse">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id='links'>
      <ul className="navbar-nav m-auto">
        <li className="nav-item"><a href="" className='nav-link'>About</a></li>
        <li className="nav-item"><a href="" className='nav-link'>Contact</a></li>
      </ul>
    </div>

    
      
    </nav>
  )
}

export default Navbar