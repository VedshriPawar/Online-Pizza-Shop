import React from 'react';
import { menu } from "../Data";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>Our Menu</h1>
      <div className='box-container'>
          {
            menu.map((item, index) => (
                <div className='box'>
                    <img src={item.img} alt="" />
                    <h3>Pizza</h3>
                    <div className='price'>Rs.299</div>
                    <a href="" className='btn'>Add To Cart</a>
                </div>
            ))
          }
      </div>
    </section>
  )
}

export default Menu;
