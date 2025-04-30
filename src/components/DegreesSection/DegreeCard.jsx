import styles from './DegreesSection.module.css';

const DegreeCard = ({ title, description, bgClass }) => {
  return (
    <div className={`${styles.card} ${styles[bgClass]}`}>
      <div className={styles.content}>
        <p className={styles.heading}>{title}</p>
        <p className={styles.para}>{description}</p>
      </div>
    </div>
  );
};

export default DegreeCard;