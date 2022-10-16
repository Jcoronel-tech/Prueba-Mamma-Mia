import React from "react";
import CardPizza from "./CardPizza";

const CardDetalles = ({data}) => {
  
  return (
    <div className='container'>
        <div className="row" >
        {data.map((p, i)=>(
          <CardPizza datos={p} key={i}></CardPizza>
        ))}
    </div>
    </div>
  )
}

export default CardDetalles
