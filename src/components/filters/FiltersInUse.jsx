import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const FiltersInUse = () => {
  const {
    filters: { filterNumber },
  } = useContext(PlanetsContext);
  return (
    <div>
      {filterNumber
        && filterNumber.map(({ column, comparison, value }, index) => (
          <div key={ column } data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={ () => console.log(index) }>X</button>
          </div>
        ))}
    </div>
  );
};

export default FiltersInUse;
