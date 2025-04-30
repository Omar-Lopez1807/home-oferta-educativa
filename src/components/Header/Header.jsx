import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <ul>
          <li><a href="#">Instituto ITC</a></li>
          <li><a href="#">Oferta Educativa</a></li>
          <li><a href="#">Admisiones</a></li>
          <li><a href="#">Plataformas</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;