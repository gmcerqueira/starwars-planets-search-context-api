import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByName = () => {
  const { handleNameInput } = useContext(PlanetsContext);
  return (
    <label htmlFor="filterName">
      Name:
      <input
        type="text"
        name="filterName"
        id="filterName"
        onChange={ handleNameInput }
        data-testid="name-filter"
      />
    </label>
  );
};

export default FilterByName;
