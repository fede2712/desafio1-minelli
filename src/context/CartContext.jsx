import React, { useEffect, useState, createContext, useContext } from 'react';



const CartContext = createContext([ ]) 

export const useCartContext =  () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    // Los estados y funciones van acá.

    const [cartList, setCartList] = useState([]) // Es un array porque el carrito es un array de objetos
    
    function addToCart(item) {
        let i = cartList.findIndex(a => a.id === item.id && a.talle === item.talle);

        if (i !== -1) {
            const cantidadVieja = cartList[i].cantidad;
            const precioTotalViejo = cartList[i].precio;
            cartList[i].precio = precioTotalViejo + (item.cantidad * item.precioU)
            cartList[i].cantidad = cantidadVieja + item.cantidad;

            setCartList([...cartList])
        } else {
            setCartList(
                [...cartList, item])
        }   
    }

    function vaciarCart() {
        setCartList([])
    }

    function eliminarItem(orden) {

        setCartList(cartList.filter(pro => pro.orden !== orden))

    }

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            eliminarItem,
            vaciarCart
                    
        } }>
            {children} 

            {/* // Children representa a todos los componentes que serán alcanzados por el context en App.jsx */}
        </CartContext.Provider>
    )

}

export default CartContextProvider