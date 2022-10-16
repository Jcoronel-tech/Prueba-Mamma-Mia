import React, {useContext} from 'react'
import Context from '../Context';
import { useNavigate } from 'react-router-dom';
import compra from '../assets/img/compra.png'

const CardPizza = ({datos}) => {

    const { addToshipping, shipping } = useContext(Context)
    const navigate = useNavigate();

    const getDetailsLink = (datos) => {
        navigate(`/infopizza/${datos}`)
    };

return (
    
<div className="col-12 col-lg-4">
    <div className="card" >
        <img src={datos.img} alt="img" />
        <div className="card-body">
            <h3 className="card-title">{datos.name}</h3>
            {shipping.qty >= 1 ? <h3><span pill bg='dark' variant="success">{shipping.qty}</span></h3> : null}
        </div>
            <ul className="list-group list-group-flush p-3">
            <h5>Ingredientes</h5>
            <div className="px-5">
            {datos.ingredients.map((ing, i)=>(
            <li key={i}>🍕 {ing}</li>
            ))}
            </div>
            </ul>
        <div className="card-body">
            <div className="d-grid gap-2 d-md-block text-center">
            <div>
                <h4>💲{datos.price}</h4>
            </div>
            <button className="btn btn-secondary m-2" type="button" onClick={() => getDetailsLink(datos.id)}>
                <span>Ver Más 👀</span>
            </button>
            <button className="btn btn-danger m-2" type="button" onClick={ () => addToshipping(datos)}>
                <span>Añadir <img src={compra} alt="" width="20" height="20"/></span>
            </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default CardPizza