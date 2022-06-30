import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemList from './ItemList';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { getFirestore, where, collection, getDocs, query } from "firebase/firestore"

// // RANDOM BUTTON

// let randomID = Math.floor(Math.random() * 15);

// console.log(randomID)

function ItemListContainer() {


  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  const { id } = useParams()


  // LA FUNCIÓN TOMA LOS PRODUCTOS DE FIREBASE Y LOS GUARDA EN LA VARIABLE PRODUCTOS
  useEffect(() => {

    const db = getFirestore()
    const QueryCollection = collection(db, "productos")
    const QueryCollectionFilter = id ? query(QueryCollection, where("categoria", "==", id)) : QueryCollection

    getDocs(QueryCollectionFilter)
      .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))

  }, [id])

  ////SIMULACIÓN DE CARGA LAS CARDS - LOADER ///

  const cards = new Promise((resolve, reject) => {
    setTimeout(() => { resolve([]); }, 2000);
  });

  cards.then((cargarItems) => {
    setItems(cargarItems);
    setCargando(false);

  });




     return (
  < >


  <Titulo  texto="TUCÁN - RETRO STORE" />

  <div className='filtercont' >
  <p className='filterelementfilt'>FILTRO</p>

  <Link className='link filterelement' to={`/categoria/africa`}>
  ÁFRICA
  </Link>

  <Link className='link filterelement' to={`/categoria/asia`}>
  ASIA
  </Link>

  <Link className='link filterelement' to={`/categoria/centroamerica`}>
  CENTROAMÉRICA
  </Link>

  <Link className='link filterelement' to={`/categoria/europa`}>
  EUROPA
  </Link>

  <Link className='link filterelement' to={`/categoria/norteamerica`}>
  NORTEAMÉRICA
  </Link>

  <Link className='link filterelement' to={`/categoria/sudamerica`}>
  SUDAMÉRICA
  </Link>

  <Link className='link filterelement' to={`/categoria/oceania`}>
  OCEANÍA
  </Link>
  
  <Link className='link filterelement' to={`/`}>
  TODAS
  </Link>

  </div>



  <ItemList items={productos} loading={cargando}   />

  </>  
  ); }


 
export default ItemListContainer;