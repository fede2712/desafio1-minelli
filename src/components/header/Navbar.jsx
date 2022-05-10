import './Navbar.css';
import tucan from './img/tucan.png';
import Carrito from './CartWidget';



function Navbar() {
    return (
<nav>
<img src={tucan} className="logoIcon" alt="Logo de la marca" />
  <ul className="menu-cont">
    <a className="menu-item borde1" href="">HOME</a>
    <a className="menu-item borde2" href="">PRODUCTOS</a>
    <a className="menu-item borde3" href="">NOSOTROS</a>
    <a className="menu-item borde4" href="">CONTACTO</a>
  </ul>
  <Carrito />

</nav>
    ); }


export default Navbar;


