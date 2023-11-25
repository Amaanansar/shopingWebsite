import React from 'react'
import logo from "../assets/shop-window.svg"
import search from "../assets/search.svg"
import cart from "../assets/amazoncart-feat.png"
import { Link } from 'react-router-dom'

const Navbar = () => {


    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-between">
         <Link to={"/"} style={{textDecoration:"none"}}><h2 className='text-light d-flex' style={{cursor:"pointer"}}><img src={logo} alt="" style={{color:"white"}} className='mx-2' />AEPIOP</h2></Link>
            <form className="d-flex" role="search" style={{width:'50%'}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit" style={{backgroundColor:'#0E9F6E'}}><img src={search} alt={search} srcSet={search} /></button>
            </form>
           <div className='d-flex'>
             <button className='d-flex  mx-3' style={{border: "none",backgroundColor: "#131921"}}>
              <span className='cartImg'><img src={cart} alt="" srcSet="" style={{width:"70px"}} /></span>
              <p className="text-light" style={{fontSize:"12px",margin: "0",position: "relative",top:"12px"}}>Cart</p>
              <p style={{fontSize: "15px",margin: "0px",position: "relative",fontWeight: "800",right: "61px",color: "orange"}}>3</p>
             </button>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
