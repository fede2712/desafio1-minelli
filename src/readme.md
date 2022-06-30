TUCÁN - RETRO STORE
Proyecto React JS CoderHouse / Camada 31170 / Federico N. Minelli
TUCÁN es un ecommerce de indumentaria deportiva orientada a las camisetas retro (y también actuales). La tienda, una SPA (Single Page App) creada con ReactJS.



PÁGINAS 📝
▪ Home:
En la página de inicio del sitio se encuentran los productos de la tienda, además de los accesos al resto de las secciones. Las camisetas se encuentran presentadas en Cards (tarjetas). Esta sección cuenta además con un filtro para seleccionar qué tipo de productos queremos visualizar.

CIRCUITO DE COMPRA 🛒
▪ Detalle del producto:
Al clickear en alguno de los items se ingresa al detalle del mismo. A la izquierda está presentada la camiseta. A la derecha, el nombre del producto, su descripción, precio y el contador. Luego de agregar al carrito el producto aparecen tres nuevos botones en reemplazo del contador: "finalizar compra" redirecciona al carrito; "seguir comprando" vuelve al contador; y el logo de home redirecciona al inicio para comprar otro producto. Por último, el contador incorpora una función de control de stock que no permite agregar al carrito más productos que los disponibles en stock. En caso de intentar hacerlo, aparecerán los tres botones antes mencionados y la leyenda "Tu selección supera el stock disponible".

▪ Carrito:
Luego de elegir los productos, el circuito continúa en el carrito de compras. En esta sección se muestran los ítems seleccionados con sus detalles: foto, título, talle, cantidad, precio unitario y precio total por prenda. También se puede optar por vaciar el carrito con el botón que está bajo de los productos.

▪ Formulario Finalizar Compra
Esta página es el último tramo del circuito de compra. En ella se deben completar los datos personales y además se visualiza nuevamente el detalle del carrito. El formulario cuenta con una validación del email: el botón de pagar sólo se visualizará (debajo del detalle del carrito) si los mails coinciden y contienen "@".

Una vez completados los datos, se finaliza con la compra haciendo click en el botón "pagar". Este botón nos  guarda la orden con los datos correspondientes en Firebase y se corrige el stock de los productos comprados.

Luego de confirmada la transacción,  aparecerá en pantalla el código de orden único de la operación. Esto es posible gracias a los datos almacenados.


▪ Ligas:
La sección "Ligas" vaticina tres ligas de primer nivel de las cuales la página traerá productos.

▪ librerías:
React Router Dom.
FireBase.

▪ Deploy:

El deploy del sitio fue realizado en Netlify, se encuentra en este link => https://tiendatucan.netlify.app/