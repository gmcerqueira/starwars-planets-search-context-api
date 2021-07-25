import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const ColumnOrder = () => {
  const { handleColumnSortChange, handleWaySortChange } = useContext(PlanetsContext);
  const options = [
    'Name',
    'Rotation period',
    'Orbital period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];
  return (
    <div>
      <select
        name=""
        id=""
        onChange={ ({ target: { value } }) => handleColumnSortChange(value) }
        data-testid="column-sort"
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <div
        className="radioChange"
        onChange={ ({ target: { value } }) => handleWaySortChange(value) }
      >
        <label htmlFor="sortWay">
          ascendente
          <input
            type="radio"
            name="sortWay"
            id="sortAsc"
            value="ASC"
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="sortWay">
          descendente
          <input
            type="radio"
            name="sortWay"
            id="sortDesc"
            value="DESC"
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
    </div>
  );
};

export default ColumnOrder;
