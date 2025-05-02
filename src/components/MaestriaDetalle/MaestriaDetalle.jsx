import { useParams } from 'react-router-dom';
import { findOriginalTitle } from '../../utils/urlHelper';
import { maestrias } from '../../data';
import { Link } from 'react-router-dom';
import styles from './MaestriaDetalle.module.css';


const MaestriaDetalle = () => {
  const { title: urlTitle } = useParams();
  const originalTitle = findOriginalTitle(maestrias, urlTitle);
  const maestria = maestrias.find(l => l.title === originalTitle);

  if (!maestria) {
    return (
    <div className="error-container">
        <h1>Programa no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
    </div>
    );
  }
  

  return (
    <div className={styles.container}>
      <h1>{maestria.title}</h1>
      <p>{maestria.fullDescription}</p>
      <p>Duración: {maestria.duracion}</p>
      
      <h2>Plan de Estudios</h2>
      <ul>
        {maestria.planEstudios?.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
      
      <Link to="/oferta-educativa" className={styles.backButton}>← Volver a Oferta Educativa</Link>
    </div>
  );
};

export default MaestriaDetalle;