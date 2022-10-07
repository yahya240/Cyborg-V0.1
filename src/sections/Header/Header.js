import React from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-dark navbar-cyborg">
        <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt='logo-img'></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    {/* <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li> */}
                    <Link to='/' className="nav-item nav-link" >Home</Link>
                    <Link to='/Browse' className="nav-item nav-link" >Browse</Link>
                    {/* <li className="nav-item"><a href="#features" className="nav-link">Browse</a></li> */}
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            {/* <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li> */}
                            <Link to='/Learn' className="dropdown-item" >Learn Bootstrap</Link>
                            <Link to='/next' className="dropdown-item" >Where to go next</Link>
                        </ul>
                    </li>
                    {/* <li className="nav-item"><a href="#faq" className="nav-link">Stream</a></li> */}
                    {/* <li className="nav-item"><a href="./index-ar.html" className="nav-link">Profile</a></li> */}
                    <Link to='/Stream' className="nav-item nav-link" >Stream</Link>
                    <Link to='/profile' className="nav-item nav-link" >Profile</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header