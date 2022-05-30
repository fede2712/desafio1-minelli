import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import { getFetch } from '../../data';



function Item({id, nombre, img, descripcion}) {

  const [productos, setProductos]=useState([]);

 /// FETCH DE LOS PRODUCTOS///
 useEffect(() => {
  getFetch()
  .then(respuesta =>   setProductos(respuesta))
},  []);
  


    return (

  <Link className='link' to={`/detalle/${id}`}>
  <div className="cardcont" id={id} >
        <img src={img}  className="cardimg" alt={nombre} />
        <p className="cardTitulo">{nombre}</p>
        <p className="cardDescripcion">{descripcion}</p>
  </div>
  </Link>
    ); }
export default Item;