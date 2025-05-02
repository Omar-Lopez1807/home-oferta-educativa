import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Banner from '../Banner/Banner';
import DegreesSection from '../DegreesSection/DegreesSection';
import LearningExperience from '../LearningExperience/LearningExperience';
import FAQ from '../FAQ/FAQ';
import FinalSection from '../FinalSection/FinalSection';

const OfertaEducativa = () => {
  return (
    <>
      <Header />
      <Breadcrumbs currentPage="Oferta Educativa" />
      <Banner />
      <DegreesSection />
      <LearningExperience />
      <FAQ />
      <FinalSection />
    </>
  );
};

export default OfertaEducativa;