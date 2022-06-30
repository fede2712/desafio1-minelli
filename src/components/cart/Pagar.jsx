import './Cart.css';
import React, { useEffect, useState } from 'react';
import Titulo from '../texts/Titulo';
import { useCartContext } from '../../context/CartContext'
import { addDoc, getFirestore, collection, writeBatch, where, query, getDocs, documentId } from 'firebase/firestore';
import Input from './Input';


export default function Pagar({ }) {
  const db = getFirestore()
  const { cartList, vaciarCart } = useCartContext()
  const [ordenes, setOrdenes] = useState([])
  const [productos, setProductos] = useState([])
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailconf, setEmailconf] = useState("")
  const [alertCheck, setAlertCheck] = useState("displayNone")
  const [mostrarBoton, setMostrarBoton] = useState(false)
  const [gracias, setGracias] = useState("nopago")
  const [ordenstorage, setOrdenstorage] = useState()

    //TOMA LA INFORMACIÓN DE FIRESTORE Y GUARDA LAS ORDENES y LOS ITEMS DE CADA ORDEN EN UN ESTADO
    useEffect(() => {
      const QueryCollection = collection(db, "ordenes")
      getDocs(QueryCollection)
        .then(resp => setOrdenes(resp.docs.map(order => ({ id: order.id, ...order.data() }))))
        .catch((err) => console.log(err))
    }, [])
 




  const handleSubmit = (event) => {
    event.preventDefault();

  }


  const graciasPorSuCompra = () => {
    setGracias("pago")
  }

  function precioFinal() {
    if (cartList.length > 0) {

      return cartList.map(a => (a.precio)).reduce((a, b) => a + b)
    }
  }


 useEffect(() => {
  const queryCollection = collection(db, "productos")
  getDocs(queryCollection)
  .then(res => setProductos(res.docs.map(order => ({ id: order.id, ...order.data() }))))
  .catch(err => console.log(err))
 
 }, [])


 
  const finalizarCompra = async () => {

    let order = {}

    order.id = nombre + parseInt((Math.random()*100000));
    order.cliente = { nombre, email, telefono }
    order.total = precioFinal()
    order.date = Date().substring(0, 24)

    order.items = cartList.map(carrito => {
      let id = carrito.id
      let nombre = carrito.nombre
      let precio = carrito.precio
      let cantidad = carrito.cantidad
      return { id, nombre, precio, cantidad }
    })

    sessionStorage.setItem('ordenCliente', JSON.stringify(order));


     const queryCollectionStock = collection(db, "productos")
     const queryActualizarStock = await query(
      queryCollectionStock,
      where(documentId(), 'in', cartList.map(it => it.id))
      )

     const batch = writeBatch(db)

     await getDocs(queryActualizarStock)
       .then(resp => resp.docs.forEach(res => 
     batch.update(res.ref, { stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad})     
    ))

    // CUANDO SE APRETA EL BOTÓN DE PAGAR, SE VACÍA EL CARRITO
     .finally(() =>  vaciarCart())

    
    batch.commit()
  }

  useEffect(() => {
    setOrdenstorage(JSON.parse(sessionStorage.getItem('ordenCliente')))
  }, [cartList])

  // VALIDACIONES DEL FORM
  // ESTA FUNCIÓN VALIDA QUE EL MAIL CONTENGA "@" Y QUE LA CONFIRMACIÓN 
  // DEL EMAIL SEA IGUAL AL EMAIL PROVISTO
  // EN CASO DE QUE NO SEA CORRECTA ALGUNA VALIDACIÓN, SE MUESTRA UN ! DE ERROR
  // Y SE OCULTA EL BOTÓN DE PAGAR
  

  useEffect(() => {

    let emailSplit = [...email]
    let emailconfSplit = [...emailconf]

    let emailCheck = emailSplit.some((e) => e === "@")
    let emailCheck2 = emailconfSplit.some((e) => e === "@")


    if (emailCheck === false || emailCheck2 === false || email !== emailconf) {
      setAlertCheck("alertInput")
      setMostrarBoton(false)
    }
    else {
      setAlertCheck("displayNone")
      setMostrarBoton(true)
    }

  }, [email, emailconf])



  return (
    <>

      { gracias === "nopago" ? 
      
      <>
        <Titulo texto="INGRESÁ TUS DATOS Y ABONÁ" />

        <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

          <Input alert="displayNone" titulo="NOMBRE Y APELLIDO" tipo="text" name="nombre" onchange={(e) => setNombre(e.target.value)} />
          <Input alert="displayNone" titulo="TELÉFONO" tipo="text" name="telefono" onchange={(e) => setTelefono(e.target.value)} />
          <Input  alert="displayNone" titulo="EMAIL" tipo="text" name="email" onchange={(e) => setEmail(e.target.value)} />
          <Input  alert="displayNone" titulo="REINGRESÁ TU EMAIL" tipo="text" name="emailconf" onchange={(e) => setEmailconf(e.target.value)} />
  
          <div className='carritoTotalCont'>
            <p className='precioFinalNum2'> <span>TOTAL</span> <span>${precioFinal()}</span> </p>
          </div>
          { mostrarBoton === false  ? <span></span> :
          <button className='vaciarcarrito' type='submit'
          onClick={() => { finalizarCompra();  graciasPorSuCompra() }}> Pagar orden </button>
          }
        </form>

      </> 
      
      : 
      <> 
      <Titulo texto="¡Gracias por su compra!"/>
      <p className='nroOrden'>Tu código de orden es: <b> {ordenstorage.id}</b></p>

      </> 

   }
   </> 
  )
}
