import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import InfoPizza from "./views/InfoPizza";
import NotFound from "./components/NotFound";
import Hero from "./components/Hero";
import { Provider } from "./Context";


const App = () => {

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Hero/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/infopizza/:id' element={<InfoPizza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App

