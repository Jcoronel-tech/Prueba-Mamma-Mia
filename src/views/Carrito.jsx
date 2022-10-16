import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

const Carrito = () => {
  const { shipping, aumentar, decrement, total, getPartialTotal } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='container m-5'>
      <h3>Detallar la cantidad en carrito y total en compra</h3>
      
      <h2 className='mb-5'>Detalle de tu pedido:</h2>

        {shipping.map((p, i) => (
          <div className='d-flex flex-row justify-content-between align-items-center mb-3' key={p.id}>
            <div className='imgAndName'>
              <img className='imgAndName__img' width="50" src={p.img} alt={p.name} />
              <div className='text imgAndName__name'>{p.name}</div>
            </div>
            <div className='qtyAndPrice'>
              <div className='qtyAndPrice__price'>${getPartialTotal(p).toLocaleString("es-CL")}</div>

              <button onClick={()=>decrement(i)}></button>

              <div className='qtyAndPrice__qty'>{p.qty}</div>
              <button onClick={()=>aumentar(i)}></button>
            </div>
          </div>
            ))}

            {total === 0 ? <h4>Tu carrito está vacío</h4> : null}
            <button onClick={()=> navigate(`/`)} variant="outline-danger" className="mt-2 justify-content-end">{total === 0 ? "Agregar pizzas al carro" : "Agregar más"}</button>
            
            <div className='d-flex'>
              {total !== 0 ?
            <button className="total d-flex justify-content-between px-4" variant='success' width="100">Hacer pedido <span>${total.toLocaleString("es-CL")}</span></button> : null }
              
              
            </div>


    </div>
  )
}

export default Carrito