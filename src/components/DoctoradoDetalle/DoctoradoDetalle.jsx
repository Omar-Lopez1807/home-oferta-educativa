import { useParams } from 'react-router-dom';
import { findOriginalTitle } from '../../utils/urlHelper';
import { doctorados } from '../../data';
import { Link } from 'react-router-dom';
import styles from './DoctoradoDetalle.module.css';


const DoctoradoDetalle = () => {
  const { title: urlTitle } = useParams();
  const originalTitle = findOriginalTitle(doctorados, urlTitle);
  const doctorado = doctorados.find(l => l.title === originalTitle);

  if (!doctorado) {
    return (
    <div className="error-container">
        <h1>Programa no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
    </div>
    );
  }
  

  return (
    <div className={styles.container}>
      <h1>{doctorado.title}</h1>
      <p>{doctorado.fullDescription}</p>
      <p>Duración: {doctorado.duracion}</p>
      
      <h2>Plan de Estudios</h2>
      <ul>
        {doctorado.planEstudios?.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
      
      <Link to="/oferta-educativa" className={styles.backButton}>← Volver a Oferta Educativa</Link>
    </div>
  );
};

export default DoctoradoDetalle;