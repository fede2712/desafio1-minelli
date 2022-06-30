import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
 import './Querys.css';

 import Navbar from './components/header/Navbar';
 import ItemListContainer from './components/listcont/ItemListContainer';
 import ItemDetailContainer from './components/listcont/ItemDetailContainer';
 import Ligas from './components/nosotros/Ligas';
 import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContext';
import Pagar from './components/cart/Pagar';


 function App() {

  

   return (
     <BrowserRouter>
      <CartContextProvider>
        <div className="App">

          <Navbar />
            <Routes>
              <Route path='/' element = { <ItemListContainer/> } />
              <Route path='/detalle/:detalleID' element = { <ItemDetailContainer/> } />
              <Route path='/nosotros' element = { <Ligas/> } />
              <Route path='/cart' element = { <Cart/> } />
              <Route path='/categoria/:id' element = { <ItemListContainer/> } />
              <Route path='/*' element ={ <Navigate to ='/' replace /> } />
              <Route path='/finalizar-compra' element = { <Pagar/> } />

            </Routes>

        </div>
      </CartContextProvider>
     </BrowserRouter>
   );


    
 }

 export default App;
