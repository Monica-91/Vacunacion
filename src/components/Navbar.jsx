import React, { Fragment } from 'react'
import {NavLink, Link} from 'react-router-dom'


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
              <Link className="navbar-brand" to="/"><img src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg" alt="Logo-Embanaco"></img></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "activeMenu" : "")}> HOME </NavLink></li>
            <li ><NavLink to='/about'> ABOUT </NavLink></li>
            <li><NavLink to='/services' className={({ isActive }) => (isActive ? "activeMenu" : "")}> SERVICES </NavLink></li>
            <li><NavLink to='/works' className={({ isActive }) => (isActive ? "activeMenu" : "")}> WORKS </NavLink></li>
            <li><NavLink to='/login' className={({ isActive }) => (isActive ? "activeMenu" : "")}> LOGIN </NavLink></li>
            <li><NavLink data-toggle="modal" data-target="#myModal" to="#myModal"><i className="fa fa-envelope-o enlaces-navbar" ></i></NavLink></li>
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
              <Link className="navbar-brand" to="/"><img src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg" alt="Logo-Embanaco"></img></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to='/' className={({ isActive }) => (isActive ? "activeMenu enlaces-navbar" : "")}> HOME </NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) => (isActive ? "activeMenu enlaces-navbar" : "")}> ABOUT </NavLink></li>
              <li><NavLink to='/services' className={({ isActive }) => (isActive ? "activeMenu enlaces-navbar" : "")}> SERVICES </NavLink></li>
              <li><NavLink to='/works' className={({ isActive }) => (isActive ? "activeMenu enlaces-navbar" : "")}> WORKS </NavLink></li>
              <li><NavLink to='/login' className={({ isActive }) => (isActive ? "activeMenu" : "")}> LOGIN </NavLink></li>
              <li><NavLink data-toggle="modal" data-target="#myModal" to="#myModal"><i className="fa fa-envelope-o enlaces-navbar" ></i></NavLink></li>
            </ul>
          </div>
          {/* <!--/.nav-collapse --> */} 
        </div>
      </div>
    </>
  )
}

export default Navbar;