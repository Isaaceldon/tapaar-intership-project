import React from 'react'
import {  NavLink } from 'react-router-dom';
import '../css/navigation.css'
import Home from '../components/Home';
export default function Navigation() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid logo p-0">
    <NavLink className="navbar-brand" to="/"  component={Home}>TE<span className="logo-text">CHO</span>PZ</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTapaar" aria-controls="navbarTapaar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTapaar">
      <ul className="navbar-nav me-auto  mb-lg-0 d-flex menu">

      <NavLink to="/"  component={Home}>
          <li className="current-active">Home</li>
      </NavLink>
      <NavLink to="/about"  >
          <li className="">About Us</li>
      </NavLink>
      <NavLink to="/services"  >
          <li className="">Services</li>
      </NavLink>
      <NavLink to="/portfolio"  >
          <li className="">Portfolio</li>
      </NavLink>
      <NavLink to="/contact"  >
          <li className="">News</li>
      </NavLink>
      <NavLink to="/"  >
          <li className="">Contact Us</li>
      </NavLink>

       </ul>


      <form className="d-flex">
        <input className="form-control me-2 d-none" type="search" placeholder="Search" aria-label="Search" />
        <span className="mx-2">|<i className="fas fa-search"></i></span>
      </form>
    </div>
  </div>
</nav>

  )
}
