import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/organisms/Navbar';
import { Inicio } from './pages/Inicio';
import { PlanEstudios } from './pages/PlanEstudios';
import { Docentes } from './pages/Docentes';
import { Eventos } from './pages/Eventos';
import { Contacto } from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/plan-estudios" element={<PlanEstudios />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
