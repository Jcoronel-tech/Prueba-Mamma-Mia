import { useContext } from "react";
import {useParams} from 'react-router-dom'
import Context from "../Context";
import DetallePizza from '../components/DetallePizza'

const InfoPizza = () => {
  const { id } = useParams();

  /*Paso variables a través del Context */
  const {listProd} = useContext(Context)
  
  const selectedProduct = listProd.filter((e) => e.id === id);

  return (
    <div className="container">
      {selectedProduct.length > 0 ? selectedProduct.map((e, i) => (
        <DetallePizza selectedProduct={e} key={i} />
      )):null
      }
    </div>
    
  )
}

export default InfoPizza