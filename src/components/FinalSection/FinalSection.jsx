import React from 'react';
import styles from './FinalSection.module.css';
import mascotaImage from './Mascota.png'; // Asegúrate de tener la imagen en esta carpeta

const FinalSection = () => {
  const sliderItems = [
    {
      id: 1,
      gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
      text1: "HELLO THERE",
      text2: "Am Ashwin.A"
    },
    {
      id: 2,
      gradient: "linear-gradient(to right, #6a11cb, #2575fc)",
      text1: "Do follow on Insta",
      text2: "ashwin_ambar_"
    },
    {
      id: 3,
      gradient: "linear-gradient(to right, #00c6ff, #0072ff)",
      text1: "Replace cards with images",
      text2: "for a image slider"
    },
    {
      id: 4,
      gradient: "linear-gradient(to right, #ff512f, #dd2476)",
      text1: "Html css only",
      text2: "Hover to stop the slides"
    },
    {
      id: 5,
      gradient: "linear-gradient(to right, #ffb6c1, #ff69b4)",
      text1: "Card 5",
      text2: "Content for card 5"
    },
    {
      id: 6,
      gradient: "linear-gradient(to right, #ff9a8b, #ffc3a0)",
      text1: "Card 6",
      text2: "Content for card 6"
    }
  ];

  return (
    <section className={styles.final}>
      <img className={styles.mascota} src={mascotaImage} alt="Mascota del instituto" />
      <div className={styles.slider}>
        <div className={styles.list}>
          {sliderItems.map((item) => (
            <div 
              key={item.id} 
              className={styles.item} 
              style={{ '--position': item.id }}
            >
              <div 
                className={styles.card2} 
                style={{ background: item.gradient }}
              >
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalSection;