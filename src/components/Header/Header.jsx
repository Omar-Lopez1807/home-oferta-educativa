import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <ul>
          <li><Link to="/instituto-itc">Instituto ITC</Link></li>
          <li><Link to="/oferta-educativa">Oferta Educativa</Link></li>
          <li><Link to="/admisiones">Admisiones</Link></li>
          <li><Link to="/plataformas">Plataformas</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;