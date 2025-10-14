import React, { useState, useEffect } from 'react'
import PersonajeCard from './components/PersonajeCard';
import PersonajeDetail from './components/PersonajeDetail';

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((res) => res.json())
      .then(data => setPersonajes(data.results))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div>
      {
        personajes.map(personaje =>
          <div key={personaje.id}
            onClick={() => setSelectedUser(personaje)}  >
            <PersonajeCard
              personaje={personaje}
            />
          </div>
        )
      }
      {
        selectedUser && <PersonajeDetail selectedUser={selectedUser} />
      }
    </div>
  )
}

export default App