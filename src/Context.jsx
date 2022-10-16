import { createContext } from "react";
import { useState, useEffect } from "react";

/*Creo el contexto */
const Context = createContext({});

const Provider = ({ children }) => {

    const [ listProd, setlistProd ] = useState([]);
    const [ shipping, setshipping ] = useState([]);
    
    /*lesctura JSON*/
    const getInfo = async() => {
      const res = await fetch('./pizzas.json');
      const data = await res.json();
      setlistProd(data);
    }
    
    useEffect(()=>{
      getInfo();
    }, []);


    const addToshipping = ({name, id, img, price}) =>{
      const items = shipping.findIndex((p)=>p.id===id);
      const datos = { name, id, img, price, qty: 1};

      if(items >= 0) {
        shipping[items].qty++;
        setshipping([...shipping]);
      }else {
        setshipping([...shipping, datos]);
      }
    }

    /*aumentarar la cantidad*/
    const aumentar = (i) => {
      shipping[i].qty++;
      setshipping([...shipping]);
    }

    /*Restar cantidad */
    const decrement = (i) => {
      const { qty } = shipping[i];
      if(qty === 1){
        shipping.splice(i, 1);
        setshipping([...shipping]);
      }
      else{
        shipping[i].qty--;
        setshipping([...shipping]);
      }
    }

      /*Totales */
      const valorTotal = 0;
      const total = shipping.reduce(
        (previousValue, { qty, price }) => previousValue + (price * qty),
        valorTotal
        );

      const valorPizza = 0;
      const totalPizzas = shipping.reduce(
        (previousValue, { qty }) => previousValue + qty,
        valorPizza
        );

      const getPartialTotal = (i) => {
      const pizzaTotal = i.price * i.qty
      return pizzaTotal;
      }


    return (
        <Context.Provider value={{listProd, setlistProd, shipping, setshipping, addToshipping, aumentar, decrement, total, getPartialTotal, totalPizzas}}>
            {children}
        </Context.Provider>
    );

};


export { Provider };
export default Context;