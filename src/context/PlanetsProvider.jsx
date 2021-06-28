import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState();

  const fetchPlanets = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const planets = await fetch(PLANETS_URL)
      .then((res) => res.json())
      .then(({ results }) => results);

    setData(planets);
  };

  const handleNameInput = ({ target }) => {
    setFilterName(target.value);
  };

  useEffect(() => {
    fetchPlanets();
    console.log('render');
  }, []);

  const context = { data, filters: { filterName }, setFilterName, handleNameInput };
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
