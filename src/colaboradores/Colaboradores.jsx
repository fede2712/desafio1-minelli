import React, { useState } from 'react';
import adidas from './img/adidas.png';
import umbro from './img/umbro.png';
import nike from './img/nike.png';
import Titulo from '../components/texts/Titulo';
import Card from '../components/listcont/Cards';



function Colaboradores() {
  
    return (
        < >
        <Titulo  texto="AGRADECEMOS A LAS SIGUIENTES MARCAS POR ACERCARNOS SUS PRODUCTOS:" />
  <div className='itemsCont'>

      <Card cont="no"  id="carduno"   img={adidas} producto="ADIDAS" />
      <Card cont="no"  id="carduno"   img={umbro} producto="UMBRO" />
      <Card  cont="no" id="carduno"   img={nike} producto="NIKE"  />


  </div>
  </>  
    ); }

export default Colaboradores;
