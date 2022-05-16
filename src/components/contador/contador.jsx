import React, { useEffect, useState } from 'react';
import './contador.css';



export default function Contador() {

    const [count, setCount] = useState(0)

    function suma() {
        setCount( count + 1)
    } 

    function resta() {
        setCount( count - 1)

         if (count == 0) {
            setCount( count )
        }
    }


 
// useEffect ( () =>    {

// }, []) 

  return (
    <div>
    <div className="contador">{count}</div>
    <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    </div>
  )
}