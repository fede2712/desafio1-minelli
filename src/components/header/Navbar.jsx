import { Link } from 'react-router-dom';
import './Navbar.css';
import tucan from './img/tucan.png';
import Carrito from './CartWidget';



function Navbar() {
    return (
<nav>
<Link className='link' to={`/`}>
<img src={tucan} className="logoIcon" alt="Logo Tucán" />
</Link>
  <ul className="menu-cont">

  <Link className='link' to={`/`}>
    <a className="menu-item borde3" href="">HOME</a>
    </Link>

    <Link className='link' to={`/colaboradores`}>
    <a className="menu-item borde3" href="">COLABORADORES</a>
    </Link>

    <Link className='link' to={`/ligas`}>
    <a className="menu-item borde3" href="">LIGAS</a>
    </Link>
    
  </ul>
  <Link className='link' to={`/cart`}>  <Carrito /></Link>

</nav>
    ); }


export default Navbar;


