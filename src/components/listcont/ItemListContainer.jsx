import React, { useState } from 'react';
import './ItemListContainer.css';
import Card from './Cards'
import Titulo from '../texts/Titulo'
import Contador from '../contador/contador.jsx'

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




function ItemListContainer() {

  
    return (
  < >
  <Titulo  texto="ALGUNOS DE NUESTROS PRODUCTOS:" />
     
  <div className='itemsCont'>

   
    <Card  id="carduno" className="cardcont" img={argentina} producto="ARGENTINA'95 " descripcion="-" precio="$1200"  />
    
    <Card id="carddos"  className="cardcont" img={brasil} producto="BRASIL '91-93" descripcion="-" precio="$1200"/>

    <Card id="cardtres" className="cardcont" img={chile}  producto="CHILE '14-15" descripcion="-" precio="$1200" />

    <Card id="cardcuatro" className="cardcont" img={paraguay} producto="PARAGUAY '15" descripcion="-" precio="$1200" />

    <Card id="cardcinco" className="cardcont"  img={uruguay} producto="URUGUAY '21" descripcion="-" precio="$1200" />

    <Card  id="carduno" className="cardcont"  img={noruega} producto="NORUEGA '18 " descripcion="-" precio="$1200"  />

    <Card id="carddos"  className="cardcont" img={brasil} producto="BRASIL '91-93" descripcion="-" precio="$1200" />

    <Card id="cardtres" className="cardcont"  img={espana}  producto="ESPAÑA '15" descripcion="-" precio="$1200" />

    <Card id="cardcuatro" className="cardcont"  img={belgica} producto="BÉLGICA '17" descripcion="-" precio="$1200" />

    <Card id="cardcinco" className="cardcont"  img={venezuela} producto="VENEZUELA '17" descripcion="-." precio="$1200" />

    <Card id="cardcinco" className="cardcont"  img={peru} producto="PERÚ '06" descripcion="-." precio="$1200" />

    <Card id="cardcinco" className="cardcont"  img={colombia} producto="COLOMBIA '05" descripcion="-" precio="$1200" />



  </div>
  
  </>  



    ); }

    
export default ItemListContainer;
