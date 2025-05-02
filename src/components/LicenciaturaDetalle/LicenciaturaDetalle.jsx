import { useParams } from 'react-router-dom';
import { findOriginalTitle } from '../../utils/urlHelper';
import { licenciaturas } from '../../data';
import { Link } from 'react-router-dom';
import styles from './LicenciaturaDetalle.module.css';


const LicenciaturaDetalle = () => {
  const { title: urlTitle } = useParams();
  const originalTitle = findOriginalTitle(licenciaturas, urlTitle);
  const licenciatura = licenciaturas.find(l => l.title === originalTitle);

  // En cada componente de detalle
    if (!licenciatura) {
        return (
        <div className="error-container">
            <h1>Programa no encontrado</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
        );
    }
  

  return (
    <div className={styles.container}>
      <h1>{licenciatura.title}</h1>
      <p>{licenciatura.fullDescription}</p>
      <p>Duración: {licenciatura.duracion}</p>
      
      <h2>Plan de Estudios</h2>
      <ul>
        {licenciatura.planEstudios?.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
      
      <Link to="/oferta-educativa" className={styles.backButton}>← Volver a Oferta Educativa</Link>
    </div>
  );
};

export default LicenciaturaDetalle;