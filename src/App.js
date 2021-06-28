import React, { useState, useEffect } from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  const [data, setData] = useState({});

  const fetchPlanets = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const planets = await fetch(PLANETS_URL)
      .then((res) => res.json())
      .then(({ results }) => results);

    return planets;
  };

  useEffect(() => {
    const fetchPage = async () => {
      const planets = await fetchPlanets();
      setData(planets);
    };
    fetchPage();
  }, []);

  const context = { data };
  return (
    <PlanetsProvider value={ context }>
      <span>Hello, App!</span>
    </PlanetsProvider>
  );
}

export default App;
