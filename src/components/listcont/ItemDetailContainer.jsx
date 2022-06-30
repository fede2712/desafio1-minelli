import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../data';
import { getFirestore, doc, getDoc, where, collection, getDocs, query } from "firebase/firestore"


function ItemListContainer({}) {
 
  const [productos, setProductos]=useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleID } = useParams()

  
  useEffect(() => {
    const db = getFirestore()
    const dbQuery = doc(db, "productos", detalleID)
    getDoc(dbQuery)
      .then(resp => setProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log(productos)
    return (
  < >


  <ItemDetail id={productos.id} img={productos.img} nombre={productos.nombre} descripcion={productos.descripcion} precio={productos.precio} loading={loading}/>
  
  </>  
  ); }

    
export default ItemListContainer;

