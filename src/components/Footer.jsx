import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='share'>
        <a href="#" className='fab fa-facebook-f'></a>
        <a href="#" className='fab fa-twitter'></a>
        <a href="#" className='fab fa-instagram'></a>
        <a href="#" className='fab fa-pinterest'></a>
     </div>
     <div className='links'>
        <a href="#">home</a>
        <a href="#">menu</a>
        <a href="#">about </a>
        <a href="#">contact </a>
     </div>
     <div className='credit'>created by <span>vedshri pawar</span></div>
    </section>
  )
}

export default Footer
