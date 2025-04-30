import styles from './DegreesSection.module.css';
import DegreeCard from './DegreeCard';

const DegreesSection = () => {
  const licenciaturas = [
    {
      id: 1,
      title: "Ingeniería en Sistemas Computacionales",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-sistemas"
    },
    {
      id: 2,
      title: "Ingeniería Civil",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-civil"
    },
    {
      id: 3,
      title: "Licenciatura en Administracion",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-administracion"
    },
    {
      id: 4,
      title: "Contador Publico",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-contaduria"
    },
    {
      id: 5,
      title: "Ingeniería en Administracion",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-ing-admin"
    },
    {
      id: 6,
      title: "Ingenieria en Gestion Empresarial",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-gestion"
    },
    {
      id: 7,
      title: "Ingeniería en Informatica",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-informatica"
    },
    {
      id: 8,
      title: "Ingeniería Mecatronica",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-mecatronica"
    },
    {
      id: 9,
      title: "Ingenieria Electromecanica",
      description: "La carrera de Ingeniería en Gestión Empresarial de nuestro Instituto Tecnológico cuenta con la acreditación ante el Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI)....",
      bgClass: "bg-electromecanica"
    },
    // Agrega más licenciaturas aquí...
  ];

  const maestrias = [
    {
      id: 1,
      title: "Maestría en Ciencias Ambientales",
      description: "El Tecnológico de Cancún, como un mecanismo para contribuir con la solución de problemas ambientales y sociales de la región...",
      bgClass: "bg-ambientales"
    },
    {
      id: 2,
      title: "Maestría en Administración en Negocios",
      description: "Programa diseñado para formar profesionales en el área de administración...",
      bgClass: "bg-negocios"
    },
    // Agrega más maestrías aquí...
  ];
  const doctorados = [
    {
      id: 1,
      title: "Doctorado en Ciencias Ambientales",
      description: "El Instituto Tecnológico de Chetumal y el Instituto Tecnológico de Cancún, como un mecanismo para contribuir con la solución de problemas ambientales...",
      bgClass: "bg-doc-ambientales"
    },
    // Agrega más doctorados aquí...
  ];

  const lenguas = [
    {
      id: 1,
      title: "Ingles",
      description: "Contenido de lenguas...",
      bgClass: "bg-lenguas"
    },
    // Agrega más doctorados aquí...
  ];

  return (
    <>
      {/* Sección de Licenciaturas */}
      <section className={styles.degreesContainer}>
        <h2 className={styles.sectionTitle}>Licenciaturas</h2>
        <div className={styles.cardsContainer}>
          {licenciaturas.map(licenciatura => (
            <DegreeCard 
              key={licenciatura.id}
              title={licenciatura.title}
              description={licenciatura.description}
              bgClass={licenciatura.bgClass}
            />
          ))}
        </div>
      </section>


      {/* Sección combinada Doctorados y Maestrias */}
      <section className={styles.combinedContainer}>
        <div className={styles.halfSection}>
          <h2 className={styles.sectionTitle}>Maestrias</h2>
          <div className={styles.cardsContainer}>
            {maestrias.map(item => (
              <DegreeCard 
                key={item.id}
                title={item.title}
                description={item.description}
                bgClass={item.bgClass}
              />
            ))}
          </div>
        </div>

        <div className={styles.halfSection}>
          <h2 className={styles.sectionTitle}>Doctorados</h2>
          <div className={styles.cardsContainer}>
            {doctorados.map(item => (
              <DegreeCard 
                key={item.id}
                title={item.title}
                description={item.description}
                bgClass={item.bgClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Lenguas */}
      <section className={styles.degreesContainer}>
        <h2 className={styles.sectionTitle}>Lenguas Extranjeras</h2>
        <div className={styles.cardsContainer}>
          {lenguas.map(lenguas => (
            <DegreeCard 
              key={lenguas.id}
              title={lenguas.title}
              description={lenguas.description}
              bgClass={lenguas.bgClass}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DegreesSection;