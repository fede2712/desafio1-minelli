import './Productos.css';
import Producto from './Producto'
import Titulo from '../texts/Titulo'
import hoodie from './img/hoodie.png';
import remera from './img/remera.png';
import short from './img/short.png';


function ProductosCont() {


    

    return (

        
  < >
  <Titulo  texto="PROXIMAMENTE:" />
     
  <div className='itemsCont'>
    
    <Producto img={hoodie} className="cardprocont" producto="BUZO" imgid="hoodieid" />
    <Producto img={remera} className="cardprocont" producto="REMERA" />
    <Producto img={short} className="cardprocont"  producto="SHORT"/>

  </div>
  </>  

    ); 
  
}

    
export default ProductosCont;

