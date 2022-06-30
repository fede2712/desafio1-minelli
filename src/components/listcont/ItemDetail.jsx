import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import Loader from './Loader';
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';
import { useCartContext } from '../../context/CartContext'
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore';


function ItemDetail({id, img, nombre, descripcion, loading, cantidad, precio}) {
    
    const {addToCart, cartList} = useCartContext()
    const orden = cartList.length + 1
    //AGREGA EL ITEM AL CARRITO


    const loaders = [1];
    
    const [botonTipo, setBotonTipo] = useState('itemcount')
    const [stock, setStock] = useState()
    const [tipo, setTipo] = useState({})
    const [count, setCount] = useState(0)


    async function stockPro() {

          const db = getFirestore()
          const queryDoc = doc(db, "productos", id)
          const docSnap = await getDoc(queryDoc);
          return setStock(docSnap.data().stock)

      }
    
      stockPro()
 
    const itemcountChange = () => {
        if (botonTipo === "itemcount") {
          setBotonTipo("seguir o volver")
        } else {setBotonTipo("itemcount")}
        
       }
    
       // IMPORTACIÓN DEL CARTCONTEXT Y DESTRUCTURING PARA EXTRAER LA FUNCIÓN.
    
       
    
       const onAdd = () => {
            addToCart({ orden: orden, id, img, nombre, tipo, cantidad: count, precioU: parseInt(precio), precio: (precio * count)}) }
    
  
    ///
       function Add() {
           setCount( count + 1)
           if (count == stock) {
            setCount( count )} 
        
        } 
    ///
       function Remove() {
           setCount( count - 1)
            if (count == 0) {setCount( count )} }

         

    return (

    <div className='ItemDetailListCont'>

    {loading
    ? loaders.map((loader) => <Loader key={loader} />) : 
<div className='column'>
    <div className='itemdetailcont' id={id} >
        <img src={img} className="itemdetailimg" alt={nombre} />
        <div className='itemdetailDerCont'>
            <p className="itemdetailTitulo">{nombre}</p>
            <p className="itemdetailDescripcion">{descripcion}</p>
            <p className="itemdetailPrecio">${precio * count}</p>
            
  { botonTipo === 'itemcount' ?
      <ItemCount stock={cantidad} nombre={nombre} precio={precio} cantidad={cantidad} onAdd={onAdd} itemcount={itemcountChange} add={Add} remove={Remove} count={count} /> :

      <AfterCount itemcount={itemcountChange} />
    }
        </div>
        
    </div>
  
    </div>
    }

</div>

    ); }

export default ItemDetail;
