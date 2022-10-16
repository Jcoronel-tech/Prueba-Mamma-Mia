import React, {useContext} from 'react'
import Context from '../Context';
import CardDetalles from '../components/CardDetalles'

const Home = () => {
  const {listProd} = useContext(Context);

  
  return (
    <div>
      <CardDetalles data={listProd}/>
    </div>
  )
}

export default Home