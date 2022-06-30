import './Cart.css';
import Titulo from '../texts/Titulo';
import CartItem from './CartItem';
import { useCartContext } from '../../context/CartContext'
import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom"



export default function Cart({ }) {

  const [itemcartcount, setItemcartcount] = useState()
  const { cartList, vaciarCart } = useCartContext()


  console.log(cartList)


  const initialValue = 0;


  function precioFinal() {

    console.log(cartList.length)

    if (cartList.length > 0) {
      return cartList.map(a => a.precio).reduce((a, b) => a + b)
    }
  }

  
  const vaciarCarrito = () => {
    vaciarCart()
  }

  // function AddU() {
  //   console.log(cartList.map(a => a.cantidad) + 1)
  // }


  return (
    <>
      <Titulo texto="CARRITO DE COMPRAS" />




      <div className='cartcont'>
        <div className='micarritocont'>
          <p className='micarritotitulo'>TU CARRITO:</p>
          {cartList.map((items) =>
                <>
                  <CartItem items={items} key={items.id} id={items.id} nombre={items.nombre}  precio={(items.precioU * items.cantidad).toLocaleString('de-DE')} precioU={items.precioU.toLocaleString('de-DE')} img={items.img} cantidad={items.cantidad} />

                </>)}


          {/* //  producto={items.nombre} tipo={items.categoria} cantidad={items.stock} precio={items.precio} img={items.imgpro}
 */}
          <p className='precioFinal'> PRECIO FINAL:  <span className='precioFinalNum'>${precioFinal()}</span> </p>


          <button className='vaciarcarrito' onClick={vaciarCarrito}>
            VACIAR CARRITO
          </button>
        </div>
        <Link className='vaciarcarrito' to={"/finalizar-compra"} >
                FINALIZAR COMPRA</Link>
      </div>

    </>
  )
} 
