import React, { createRef, useContext, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByNumber = () => {
  const { saveFilter, returnAlreadyUsedFilter } = useContext(PlanetsContext);

  useEffect(() => {
  }, []);

  const renderOptions = (options) => options.map((option) => (
    <option key={ option[0] } value={ option[0] }>
      {option[1]}
    </option>
  ));

  const columnOptions = Object.entries({
    population: 'Population',
    orbital_period: ' Orbital period',
    diameter: 'Diameter',
    rotation_period: 'Rotation period',
    surface_water: 'Surface water',
  }).filter((option) => returnAlreadyUsedFilter(option[0]));

  const comparisonOptions = Object.entries(
    { 'maior que': 'maior que', 'menor que': 'menor que', 'igual a': 'igual a' },
  );
  const columnSelector = createRef();
  const comparisonSelector = createRef();
  const valueSelector = createRef();

  return (
    <div>
      <label htmlFor="column-filter">
        Column:
        <select
          name="column-filter"
          id="column-filter"
          ref={ columnSelector }
          data-testid="column-filter"
        >
          {renderOptions(columnOptions)}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Comparison:
        <select
          name="comparison-filter"
          id="comparison-filter"
          ref={ comparisonSelector }
          data-testid="comparison-filter"
        >
          {renderOptions(comparisonOptions)}
        </select>
      </label>

      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          ref={ valueSelector }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => saveFilter(
          columnSelector.current.value,
          comparisonSelector.current.value,
          valueSelector.current.value,
        ) }
      >
        Add filter
      </button>
    </div>
  );
};

export default FilterByNumber;
