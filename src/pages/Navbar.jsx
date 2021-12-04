import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <Link class="navbar-brand" to="/"><img src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg" alt="Logo-Embanaco"></img></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to='Home.jsx'> HOME </Link></li>
            <li><Link to='/about' className="enlaces-navbar"> ABOUT </Link></li>
            <li><Link to='/services' className="enlaces-navbar"> SERVICES </Link></li>
            <li><Link to='/works' className="enlaces-navbar"> WORKS </Link></li>
            <li><Link data-toggle="modal" data-target="#myModal" to="#myModal"><i className="fa fa-envelope-o enlaces-navbar" ></i></Link></li>
            </ul>
          </div>
          {/* .nav-collapse --> */} 
        </div>
      </div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <Link class="navbar-brand" to="/"><img src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg" alt="Logo-Embanaco"></img></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to='Home.jsx'> HOME </Link></li>
              <li><Link to='/about' className="enlaces-navbar"> ABOUT </Link></li>
              <li><Link to='/services' className="enlaces-navbar"> SERVICES </Link></li>
              <li><Link to='/works' className="enlaces-navbar"> WORKS </Link></li>
              <li><Link data-toggle="modal" data-target="#myModal" to="#myModal"><i className="fa fa-envelope-o enlaces-navbar" ></i></Link></li>
            </ul>
          </div>
          {/* <!--/.nav-collapse --> */} 
        </div>
      </div>
    </>
  )
}

export default Navbar;