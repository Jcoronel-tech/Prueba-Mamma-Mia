import { React, useContext } from 'react';
import Context from '../Context';
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/pizza.png'
import compra from '../assets/img/compra.png'

export default function Navbar() {
  const { total, totalPizzas } = useContext(Context);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar d-flex bd-highlight">
      <div className='p-2 bd-highlight text-center mx-5 px-5'>
        <NavLink className={ setActiveClass } to="/"> 
        <img src={logo} alt="" width="30" height="30"/>
        <h4>Pizzería Mamma Mia!</h4> 
        </NavLink>
      </div>
      <div className='p-2 bd-highlight text-center mx-5 px-5'>
        <NavLink className={ setActiveClass } to="/carrito">
          <img src={compra} alt="" width="30" height="30"/>
          {totalPizzas !== 0 ? <span className='me-2 px-2'>{totalPizzas}</span> : null}
          <h4>Total 💲<span>{ total.toLocaleString("es-CL") }
            </span></h4>
        </NavLink>
      </div>
    </nav>
  );
}
