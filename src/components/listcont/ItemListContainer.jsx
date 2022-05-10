''
import './ItemListContainer.css';
import Card from './Cards'
import Titulo from '../texts/Titulo'

import argentina from './img/argentina.png';
import brasil from './img/brasil.png';
import uruguay from './img/uruguay.png';
import paraguay from './img/paraguay.png';
import chile from './img/chile.png';


function ItemListContainer() {

 
    return (
  < >
  <Titulo  texto="SECCION SUDAMÉRICA:" />
     
  <div className='itemsCont'>

   
    <Card  id="carduno"   img={argentina} producto="ARGENTINA'95 " descripcion="No dejes de renovar tu stock de La Albiceleste" precio="$1200"  />


    <Card id="carddos"  descripcion="La canarinha. El penta. La verdeamarela. No se diga más." img={brasil} producto="BRASIL '91-93" precio="$1200" className="backeip"/>


    <Card id="cardtres" className="cardcont backethath"  img={chile}  producto="CHILE '14-15" descripcion="¿La Roja volverá a jugar una Copa del Mundo?" precio="$1200" />

    <Card id="cardcuatro" className="cardcont backcake"  img={paraguay} producto="PARAGUAY '15" descripcion="Apoyá al conjunto guaraní y llevá una de sus camisetas." precio="$1200" />

    <Card id="cardcinco" className="cardcont backmeta"  img={uruguay} producto="URUGUAY '21" descripcion="La celeste. La Garra Charrúa. no dejes de tener la tuya" precio="$1200" />

  </div>
  </>  

    ); }

    
export default ItemListContainer;
