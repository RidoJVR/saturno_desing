import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router

const SectorButtonGrid = ({ apiEndpoint }) => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    // Llamada a tu API para obtener la lista de sectores
    // Reemplaza 'tuApiEndpoint' con la URL correcta de tu API
    fetch(apiEndpoint || 'http://127.0.0.1:3005/folders/personaje')
      .then(response => response.json())
      .then(data => setSectors(data))
      .catch(error => console.error('Error fetching sectors:', error));
  }, [apiEndpoint]);

  return (
    <div>
      {sectors.map(sector => (
        <div key={sector.id}>
          <h3>{sector.name}</h3>
          <div className="button-grid">
            {sector.characters.map(character => (
              <Link key={character.id} to={`/characters/${character.id}`}>
                <button>{character.name}</button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorButtonGrid;
