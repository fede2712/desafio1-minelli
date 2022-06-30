import React, { useState } from 'react';
import './ItemListContainer.css';
import Contador from '../contador/Contador';
import '../contador/Contador.css';



function Card({id, clase, img, producto, descripcion, precio, cont}) {

  const [switchToggle2, setswitchToggle2] = useState(false)
  const ToggleSwitch2 = () => {
    
  switchToggle2 ? setswitchToggle2(false) : setswitchToggle2(true);
  
  }
    return (

  <div onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}  id={id}>
        <img src={img} className="cardimg" alt={producto} />
        <p className="cardTitulo">{producto}</p>
        <p className="cardDescripcion">{descripcion}</p>
        <p className="cardPrecio">{precio}</p>
        {cont === "no" ? <span></span> :  <Contador /> }
       
  </div>
    ); }

export default Card;
