import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState([]);

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

  const saveFilter = (column, comparison, value) => {
    setFilterNumber([
      ...filterNumber,
      { column, comparison, value: Number(value) },
    ]);
  };

  const filteringByName = (planet) => (filterName
    ? planet.name.toLowerCase().includes(filterName.toLowerCase())
    : planet);

  const returnFromFilter = (planet) => {
    if (filterNumber.length === 0) return planet;
    const filter = filterNumber[filterNumber.length - 1];
    const { column, comparison, value } = filter;
    const comparisonValue = Number(planet[column]);

    switch (comparison) {
    case 'maior que':
      return comparisonValue > value;

    case 'menor que':
      return comparisonValue < value;

    case 'igual a':
      return comparisonValue === value;

    default:
      return planet;
    }
  };

  const returnAlreadyUsedFilter = (option) => {
    const used = filterNumber.reduce((acc, curr) => [...acc, curr.column], []);

    return !used.includes(option);
  };

  const removeFilterNumber = (index) => {
    setFilterNumber(filterNumber.filter((filter, i) => i !== index));
    // console.log(filterNumber.filter((filter, i) => i !== index));
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
    filters: {
      filterName,
      filterNumber,
    },
    setFilterName,
    handleNameInput,
    saveFilter,
    filteringByName,
    returnFromFilter,
    returnAlreadyUsedFilter,
    removeFilterNumber,
  };
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
