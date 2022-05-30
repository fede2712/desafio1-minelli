import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Card from './Cards'
import Titulo from '../texts/Titulo'
import ItemList from './ItemList';

import { Link } from "react-router-dom"
import { getFetch } from '../../data';
import { useParams } from 'react-router-dom';

import argentina from './img/argentina.png';
import brasil from './img/brasil.png';
import uruguay from './img/uruguay.png';
import paraguay from './img/paraguay.png';
import chile from './img/chile.png';
import peru from './img/peru.png';
import venezuela from './img/venezuela.png';
import colombia from './img/colombia.png';
import espana from './img/espana.png';
import belgica from './img/belgica.png';
import noruega from './img/noruega.png';

//RANDOM BUTTON//
let randomID = Math.floor(Math.random() * 15);

console.log(randomID)

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos]=useState([]);

  const { id } = useParams()

  //FETCH// 

  useEffect(() => {

    if (id) {
      getFetch()
      .then(respuesta =>   setProductos(respuesta.filter((prods)=> prods.categoria === id)))
      .catch((err)=>console.log(err))
      .finally(() => setLoading(false))
    } else {
      getFetch()
      .then(respuesta=> setProductos(respuesta))
      .catch((err)=>console.log(err))
      .finally(() => setLoading(false))
    }

 
  
  },  [id]);

  //PROMISE// 
  const cards = new Promise((resolve, reject) => {
    setTimeout(() => {resolve([]);}, 2000);
  });

   cards.then((cargarItems) => {
    setItems(cargarItems);
    setLoading(false);
  });




  return (
    < >
  
  
    <Titulo  texto="Elegí el diseño" />
  
    <div className='filtercont' >
    <p className='filterelementfilt'>FILTRO</p>
  
    <Link className='link filterelement' to={`/categoria/hodl`}>
    HODL DESIGN
    </Link>
  
    <Link className='link filterelement' to={`/categoria/nft`}>
    NFT COLLECTIONS
    </Link>
  
    <Link className='link filterelement'  to={`/detalle/${randomID}`}>
    PICK RANDOM
    </Link>
  
    <Link className='link filterelement' to={`/`}>
    VER TODO
    </Link>
  
    </div>
  
  
  
    <ItemList items={productos} loading={loading}   />
  
    </>  
    ); }
  
  
   
  export default ItemListContainer;