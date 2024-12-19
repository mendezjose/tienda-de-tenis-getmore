import './Hero.scss';
import ball from './ball.png';

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
        <img src={ball} />
      </div>
      <div className='navbar'>
        <div className='menu-items'>
          <div className='active'>Inicio</div>
          <div>Acerca de Nosotros</div>
          <div>Historia</div>
          <div>Contacto</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
