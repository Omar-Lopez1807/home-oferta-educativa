import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button 
        className={`${styles.faqQuestion} ${isActive ? styles.active : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        {question}
      </button>
      <div 
        className={`${styles.faqAnswer} ${isActive ? styles.show : ''}`}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default FAQItem;