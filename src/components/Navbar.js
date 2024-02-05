import React from 'react'
import PropTypes from 'prop-types'
// import Darkbutton from './Darkbutton';
import {Link} from "react-router-dom";
// import Dropdown from './Dropdown';

export default function Navbar(props) {
  return (
    <div>
      <nav className= {` navbar navbar-expand-lg navbar-${props.strt} bg-${props.strt}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">{props.c1}</a> */}
          <Link className="nav-link" aria-current="page" to="/">{props.c1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.c2}</Link>
          {/* <a className="nav-link" href="#">{props.c2}</a> */}
        </li>
      </ul>
      {/* <Darkbutton/> */}
      <div>
        <button class="d1" id="d11">

        </button>
      </div>
      <div>
        <button class="d1" id="d12">
          
        </button>
      </div>
      <form action="" style={{color:props.strt === "light"?'black':'white'}}>
        <input className="form-check-input"type="checkbox" onClick={props.rad} /> Enable dark mode
      </form>
      
    </div>
  </div>
  </nav>
    </div>
  )
}



// proptypes =--= type of props 
Navbar.propTypes = {
  // isRequired =--= if ther isRequired then the value will be not empty if empty before run it gives error
  title: PropTypes.string.isRequired,
  c1: PropTypes.string.isRequired
};

// default props
Navbar.defaultProps={
  title:"GYM website",
  c1:"Home",
  c2:"About"
}