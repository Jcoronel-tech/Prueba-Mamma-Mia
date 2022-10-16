import React,  { useContext } from 'react'
import Context from '../Context';
import compra from '../assets/img/compra.png'

const DetallePizza = ({selectedProduct}) => {
    const {addToshipping} = useContext(Context);
    

  return (

    <div className="card m-3">
        <div className="row g-0" >
            <div className="col-md-4">
            <img className='img-fluid rounded-start' src={selectedProduct.img} alt="img" />
            </div>
            <div className="col-md-8">
                <div class="card-body">
                <div className="card-body">
                    <h3 className="card-title">{selectedProduct.name}</h3>
                </div>
                    <ul className="list-group list-group-flush p-3">
                    <h5>Ingredientes</h5>
                    <div className="px-5">
                        <li>🍕 {selectedProduct.ingredients[0]}</li>
                        <li>🍕 {selectedProduct.ingredients[1]}</li>
                        <li>🍕 {selectedProduct.ingredients[2]}</li>
                        <li>🍕 {selectedProduct.ingredients[3]}</li>
                    </div>
                    </ul>
                    <h4>Precio:💲{selectedProduct.price}</h4>
                    <button class="btn btn-danger m-2" type="button" onClick={ () => addToshipping(selectedProduct)}>
                    <span>Añadir <img src={compra} alt="" width="20" height="20"/></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetallePizza