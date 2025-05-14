import { useState } from "react"

export default function Navbar(){
  return (
  <>
  <nav className="navbar navbar-expand-lg sticky-top bg-light" data-bs-theme="light" id="header">
  <div className="container">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className='nav-link active' aria-current="page" href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#about-me">About me</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#mini-projects">Mini-Projects</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#internships">Internships</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}