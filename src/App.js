import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LicenciaturaDetalle from './components/LicenciaturaDetalle/LicenciaturaDetalle';
import MaestriaDetalle from './components/MaestriaDetalle/MaestriaDetalle';
import DoctoradoDetalle from './components/DoctoradoDetalle/DoctoradoDetalle';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Banner from './components/Banner/Banner';
import DegreesSection from './components/DegreesSection/DegreesSection';
import LearningExperience from './components/LearningExperience/LearningExperience';
import FAQ from './components/FAQ/FAQ';
import FinalSection from './components/FinalSection/FinalSection';
import OfertaEducativa from './components/OfertaEducativa/OfertaEducativa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
              <>
                <Header />
                <Breadcrumbs currentPage="Oferta Educativa" />
                <Banner />
                <DegreesSection />
                <LearningExperience />
                <FAQ />
                <FinalSection />
              </>
            } />
        <Route path="/" element={<Navigate to="/oferta-educativa" replace />} />
        <Route path="/oferta-educativa" element={<OfertaEducativa />} />
        <Route path="/licenciatura/:title" element={<LicenciaturaDetalle />} />
        <Route path="/maestria/:title" element={<MaestriaDetalle />} />
        <Route path="/doctorado/:title" element={<DoctoradoDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;