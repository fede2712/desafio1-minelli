import React, { useState } from 'react';
import './ItemListContainer.css';
import { Link } from "react-router-dom"


export default function ItemCount({ itemcount }) {


  
  return (
    <>
      <div  className='contador-cont'>
        <Link className='filterelement' to={"/cart"}>
        FINALIZAR COMPRA</Link>
        
        <p className='filterelement' onClick={itemcount}>CONTINUAR COMPRANDO</p>

        <Link className='filterelementimg'  to={"/"}>
        <img className='backhomeimg' src="https://img.icons8.com/ios/50/000000/home--v1.png"/></Link>
      </div>

    </>
  )
}


