import './Cart.css';
import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../../context/CartContext'



export default function CartItem({ id, nombre, tipo, cantidad, precio, items, img, precioU }) {

  const { eliminarItem } = useCartContext()
  // const [itemcartcount, setItemcartcount] = useState({cantidad})


  //FUNCION QUE LLAMA A LA FUNCION ELIMINARITEM DEL CARTCONTEXT
  const elimItem = () => {
    eliminarItem(items.orden)
  }


  // ///
  // function Add() {
  //     setItemcartcount( itemcartcount + 1)
  //  } 
  //   ///
  //   function Remove() {
  //     setItemcartcount( itemcartcount - 1)
  //  }




  return (
    <div className='micarritoitemscont'>
      <img className='cartImg' src={img} alt="" />

      <div className='micarritoDetalleCont'>
        <p className='carritoprod'> {nombre}</p>
        <p className='carritoprod'> ${precioU}</p>
        <p className='carritocant'> CANTIDAD: {cantidad}</p>
      </div>

      <div className='precioTachoCont'>
        <img onClick={elimItem} className='tachito' src="https://img.icons8.com/material-rounded/48/000000/waste.png" />
        <p className='carritoprecio'> ${precio}</p>
      </div>
    </div>

  )
}
