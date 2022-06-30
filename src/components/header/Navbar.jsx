import { Link } from 'react-router-dom';
import './Navbar.css';
import tucan from './img/tucan.png';
import Carrito from './CartWidget';



function Navbar() {
    return (
<nav>
<img src={tucan} className="logoIcon" alt="Logo Tucán" />
  <ul className="menu-cont">

  <Link className='link' to={`/`}>
    <a className="menu-item borde3" href="">HOME</a>
    </Link>

    <Link className='link' to={`/retro`}>
    <a className="menu-item borde3" href="">RETRO</a>
    </Link>

    <Link className='link' to={`/nosotros`}>
    <a className="menu-item borde3" href="">LIGAS</a>
    </Link>
    
  </ul>
  <Link className='link' to={`/cart`}>  <Carrito /></Link>

</nav>
    ); }


export default Navbar;


