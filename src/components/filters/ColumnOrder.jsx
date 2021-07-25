import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const ColumnOrder = () => {
  const { setSort } = useContext(PlanetsContext);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

  const handleColumnSortChange = (column) => {
    setOrder({ ...order, column });
  };

  const handleWaySortChange = (sort) => {
    setOrder({ ...order, sort });
  };
  const options = {
    name: 'Name',
    population: 'Population',
    orbital_period: ' Orbital period',
    diameter: 'Diameter',
    rotation_period: 'Rotation period',
    surface_water: 'Surface water',
  };
  return (
    <div>
      <select
        name=""
        id=""
        onChange={ ({ target: { value } }) => handleColumnSortChange(value) }
        data-testid="column-sort"
      >
        {Object.entries(options).map((option) => (
          <option key={ option[0] } value={ option[0] }>
            {option[1]}
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
            defaultChecked
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
      <button
        type="button"
        onClick={ () => {
          setSort(order);
        } }
        data-testid="column-sort-button"
      >
        Sort
      </button>
    </div>
  );
};

export default ColumnOrder;
