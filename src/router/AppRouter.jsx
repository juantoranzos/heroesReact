import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavComponent } from '../component/NavComponent';
import { Dc } from '../pages/Dc';
import { Inicio } from '../pages/Inicio';
import { Marvel } from '../pages/Marvel';
import { DetalleHeroe } from '../pages/DetalleHeroe'; // Asegúrate de importar DetalleHeroe correctamente
import { heroes as heroesdb } from '../data/heroes';

export default function AppRouter() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(heroesdb);
  }, []);

  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path='/' element={<Inicio heroes={heroes} />} />
        <Route path='/dc' element={<Dc />} />
        <Route path='/marvel' element={<Marvel />} />
        <Route path='/detalleheroe/:id' element={<DetalleHeroe />} /> {/* Ruta para detalleheroe con :id */}
      </Routes>
    </BrowserRouter>
  );
}
