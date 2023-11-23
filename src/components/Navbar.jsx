import React, { useRef } from 'react';
import { cart }  from "../Data";

function Navbar() {
   const searchRef = useRef();    // useRef hook
   const cartRef = useRef();
   const navbarRef = useRef();
     const searchHandler = () => {
       searchRef.current.classList.toggle("active");  //to activate the serach bar
       cartRef.current.classList.remove("active");   //to solve the overlapping
       navbarRef.current.classList.remove("active");
     };

     const cartHandler = () => {
      cartRef.current.classList.toggle("active");
      searchRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
     };

     const navbarHandler = () => {
      navbarRef.current.classList.toggle("active");
      searchRef.current.classList.remove("active");
      cartRef.current.classList.remove("active"); 
     };
  
     return (
    <>

    {/* ------------ header ------- */}
      <header className="header">
        <a href="#" className='logo'>
          <h1 className="logo-title">   Pizz
          <span className="logo-title-invert">eria</span>
          </h1> </a>
        
        {/* ----navbar----- */}
        
          <nav className='navbar' ref={ navbarRef }>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
       
       {/* -----icons----- */}
          <div className='icons'>
            <div className='fas fa-search' onClick={ searchHandler }></div>
            <div className='fas fa-shopping-cart' onClick={  cartHandler }></div>
            <div className='fas fa-bars' id="menu-btn" onClick={ navbarHandler }></div>
          </div> 
        
        {/* -----input---- */}
           <div className="search-form" ref={ searchRef }>
            <input type="search" placeholder='search here..' id='search-box'/>
            <label htmlFor="search-box" className='fas fa-search'></label>
           </div>
        
        {/* --------cart items------- */}
         <div className='cart-item-container' ref={ cartRef }>
           {cart.map(( item, index ) => (
           
           <div className='cart-item' key={ index }>
                <span className='fas fa-times'></span>
                <img src={ item.img } alt="" />
                
                <div className='content'> 
                    <h3>cart item 01</h3>
                    <div className='price'>15.99</div>
                </div>
            </div>
           ))}

           <a className='btn' href="#">checkout now</a>
        </div> 
      </header>
    </>
  );
}

export default Navbar;
