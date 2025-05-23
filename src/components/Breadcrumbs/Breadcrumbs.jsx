import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ currentPage }) => {
  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link to="/"><FaHome /></Link>
        </li>
        <li><FaChevronRight /></li>
        <li>{currentPage}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;