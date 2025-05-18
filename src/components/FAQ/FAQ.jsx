import FAQItem from './FAQItem';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      question: "¿Cómo es el proceso de admisión?",
      answer: `<p>Para ingresar al IT Cancún, sigue estos pasos:</p>
        <ul>
          <li><strong>Registro:</strong> Ingresa a nuestro sitio web oficial y completa la solicitud en línea.</li>
          <li><strong>Examen de admisión:</strong> Presenta el examen de ingreso en la fecha programada.</li>
          <li><strong>Publicación de resultados:</strong> Consulta los resultados en nuestro sitio web.</li>
          <li><strong>Entrega de documentos:</strong> Si eres aceptado, entrega la documentación necesaria para completar tu inscripción.</li>
        </ul>`
    },
    // Agrega más FAQs aquí...
    {
      id: 2,
      question: "¿Cuál es el horario de clases?",
      answer: "El horario puede ser matutino o vespertino, dependiendo de la carrera y semestre."
    },

    {
      id: 3,
      question: "¿El instituto ofrece actividades extracurriculares?",
      answer: "Sí, hay talleres de música, danza, deportes, clubes estudiantiles, concursos y más."
    },

    {
      id: 4,
      question: "¿Cómo funciona el servicio social?",
      answer: "Se realiza después de cubrir el 70% de créditos y tiene una duración de 480 horas en instituciones públicas o sociales."
    },

    {
      id: 5,
      question: "¿Qué necesito para titularme?",
      answer: "Haber aprobado todas las materias, realizar servicio social, residencia profesional, ingles y cumplir con algún proceso de titulación como tesis, informe técnico o promedio general."
    },

  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h1 className={styles.faqTitle}>Preguntas Frecuentes sobre el Instituto Tecnológico de Cancún</h1>
        
        {faqItems.map(item => (
          <FAQItem 
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;