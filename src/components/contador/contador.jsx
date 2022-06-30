import React, { useEffect, useState } from 'react';
import './Contador.css';
import botoncompra from './img/botoncompra.png';


export default function Contador({stock, initial, onAdd}) {

    const [count, setCount] = useState(0)

    function Add() {
      setCount( count + 1)

      if (count == stock) {
        setCount( count )
      }
  } 

  function Remove() {
      setCount( count - 1)

       if (count == 0) {
          setCount( count )
      }
  }

  function onAddbutton () {
    alert("Agregaste " + count + " al carrito")
  }

 
// useEffect ( () =>    {

// }, []) 

return (
  <>
    <div  className='contador-cont'>
      <button className='AddRemoveButton topleftradius' onClick={Remove}>-</button>
      <div className='contador'>{count}</div>
      <button className='AddRemoveButton toprightradius' onClick={Add}>+</button>
    </div>
    <div className='addCartButtonCont'>
      <button className='addCartButton' onClick={onAddbutton}> <img className='carritoadd' src={botoncompra} alt="" /> </button>
      <p className='ultimosDisp'>¡Últimos {stock} disponibles!</p>
    </div>
  </>
)
}