import React from 'react'
import {Link } from "react-router-dom";
import './First.css';
function First() {
  return (
    <>
    <div className='box'>
      <img src="netflix_logo4.png" alt="netflix logo" className='image'  />
        <Link to="second"><button className='sign'>Sign in</button></Link>
        <button className='lan'>English</button>
      <div className="main">
        <b><h1 className='yo'>The biggest Indian hits. Ready to watch <br /> here from $149. </h1></b>
        <h4 className='mid' >Join today. cancel anytime.</h4>
        <h5> Ready to watch? Enter your email to create or restart your membership.</h5>
      </div>

      <input type="text" id="name" placeholder='Email Address'></input>
      <Link to="Second"><button className='button'>Get Started</button></Link>
      </div>
    </>
  )
}

export default First
