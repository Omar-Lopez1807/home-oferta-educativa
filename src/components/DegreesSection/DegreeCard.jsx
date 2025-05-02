import { Link } from 'react-router-dom';
import styles from './DegreesSection.module.css';
import { createFriendlyUrl } from '../../utils/urlHelper';

const DegreeCard = ({ id, title, description, bgClass, programType }) => {
  const friendlyUrl = createFriendlyUrl(title);
  
  return (
    <Link to={`/${programType}/${friendlyUrl}`} className={styles.cardLink}>
      <div className={`${styles.card} ${styles[bgClass]}`}>
        <div className={styles.content}>
          <p className={styles.heading}>{title}</p>
          <p className={styles.para}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DegreeCard;