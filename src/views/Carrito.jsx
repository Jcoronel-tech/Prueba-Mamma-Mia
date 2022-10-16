import { React, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

const Carrito = () => {
  const { shipping, aumentar, decrement, total, getPartialTotal } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='container'>
        <h3>Detalle de tu pedido:</h3>
        {shipping.map((p, i) => (
          <div key={p.id}>
            <table className="table text-center">
                <thead>
                <tr>
                    <th scope="col">Pizzas</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        <div className='pt-2'>
                          <img className='m-2' width="100" src={p.img} alt={p.name} />
                          {p.name}
                        </div>
                    </th>
                    <td>
                        <div className='pt-3'>
                            <button className='m-2' onClick={()=>aumentar(i)}>➕</button>
                            {p.qty}
                            <button className='m-2' onClick={()=>decrement(i)}>➖</button>
                        </div>
                    </td>
                    <td>
                        <div className='pt-4'>💲{getPartialTotal(p).toLocaleString("es-CL")}</div>
                    </td>   
                </tr>
                </tbody>
            </table>
          </div>
          
            ))}
            <h4>Total a pagar 💲<span>{ total.toLocaleString("es-CL") }
            </span></h4>
            {total === 0 ? <h4>Tu carrito está vacío</h4> : null}
            <button onClick={()=> navigate(`/`)} className="btn btn-secondary m-2">{total === 0 ? "Agregar pizzas al carro" : "Agregar más"}</button>
            
            <div className='d-flex'>
              {total !== 0 ?
            <button className=" btn btn-danger m-2">Hacer pedido<span>${total.toLocaleString("es-CL")}</span></button> : null }
            </div>
    </div>
  )
}

export default Carrito