import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../data/heroes';

export const DetalleHeroe = () => {
  const { id } = useParams(); // Extrae el id de los parámetros de la URL
  const heroe = heroes.find(h => h.id === id); // Encuentra el héroe por id

  if (!heroe) {
    return <div>Héroe no encontrado</div>;
  }

  return (
    <section className="container align-items-center text-center justify-content-center">
      <h1>{heroe.superhero}</h1>
      <img src={heroe.url} alt={heroe.superhero} style={{ maxWidth: '100vh' }} />
      <p><strong>Nombre:</strong> {heroe.alter_ego}</p>
      <p><strong>Empresa:</strong> {heroe.publisher}</p>
      <p><strong>Primera Aparicion:</strong> {heroe.first_appearance}</p>
      <p><strong>Characters:</strong> {heroe.characters}</p>
    </section>
  );
};
