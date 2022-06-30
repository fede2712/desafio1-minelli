import React, { useState } from 'react';
import Titulo from '../texts/Titulo'
import Card from '../listcont/Item'
import laliga from './img/laliga.png';
import premier from './img/premier.png';
import serieA from './img/serieA.png';



function Nosotros() {
  
    return (
        < >
        <Titulo  texto="PROXIMAMENTE" />
        
  <div className='itemsCont'>

      <Card  id="carduno"   img={laliga} producto="LA LIGA" descripcion="LA LIGA"/>
      <Card  id="carduno"   img={premier} producto="PREMIER LEAGUE" descripcion="PREMIER LEAGUE" />
      <Card  id="carduno"   img={serieA} producto="SERIE A" descripcion="SERIE A" />


  </div>
  </>  
    ); }

export default Nosotros;
