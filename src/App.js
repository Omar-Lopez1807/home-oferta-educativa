import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Banner from './components/Banner/Banner';
import DegreesSection from './components/DegreesSection/DegreesSection';
import LearningExperience from './components/LearningExperience/LearningExperience';
import FAQ from './components/FAQ/FAQ';
import FinalSection from './components/FinalSection/FinalSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <main className="container">
        <Banner />
        <p id="description">
          Explora nuestras Licenciaturas, Ingenierías, Maestrías y Doctorado
          diseñados para impulsar tu futuro profesional
        </p>
        <DegreesSection />
        <LearningExperience />
        <FAQ />
        <FinalSection />
      </main>
    </div>
  );
}

export default App;