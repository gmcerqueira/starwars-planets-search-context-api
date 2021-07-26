import React, { useContext } from 'react';
import { Badge, CloseButton } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';

const FiltersInUse = () => {
  const {
    filters: { filterNumber },
    removeFilterNumber,
  } = useContext(PlanetsContext);
  return (
    <div>
      {filterNumber
        && filterNumber.map(({ column, comparison, value }, index) => (
          <div key={ column } data-testid="filter">
            <Badge bg="dark">
              {`${column} ${comparison} ${value}`}
              <CloseButton variant="white" onClick={ () => removeFilterNumber(index) } />
            </Badge>
          </div>
        ))}
    </div>
  );
};

export default FiltersInUse;
