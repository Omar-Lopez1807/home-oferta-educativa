import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <a href="#"><FaHome /></a>
        </li>
        <li><FaChevronRight /></li>
        <li>Oferta Educativa</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;