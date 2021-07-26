import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    <Form.Group>
      <Form.Select
        aria-label="Column to sort"
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => handleColumnSortChange(value) }
      >
        {Object.entries(options).map((option) => (
          <option key={ option[0] } value={ option[0] }>
            {option[1]}
          </option>
        ))}
      </Form.Select>
      <div
        className="radioChange"
        onChange={ ({ target: { value } }) => handleWaySortChange(value) }
      >
        <Form.Check
          type="radio"
          defaultChecked
          label="Ascendente"
          value="ASC"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Descendente"
          value="DESC"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </div>

      <Button
        variant="secondary"
        type="button"
        onClick={ () => {
          setSort(order);
        } }
        data-testid="column-sort-button"
      >
        Sort
      </Button>
    </Form.Group>
  );
};

export default ColumnOrder;
