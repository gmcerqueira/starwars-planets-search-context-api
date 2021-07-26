import React, { createRef, useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByNumber = () => {
  const { saveFilter, returnAlreadyUsedFilter } = useContext(PlanetsContext);

  useEffect(() => {}, []);

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

  const comparisonOptions = Object.entries({
    'maior que': 'maior que',
    'menor que': 'menor que',
    'igual a': 'igual a',
  });
  const columnSelector = createRef();
  const comparisonSelector = createRef();
  const valueSelector = createRef();

  return (
    <Form>
      <Form.Group>
        <Form.Label>Column</Form.Label>
        <Form.Select
          ref={ columnSelector }
          aria-label="Column filter select"
          data-testid="column-filter"
        >
          {renderOptions(columnOptions)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Compare</Form.Label>
        <Form.Select
          ref={ comparisonSelector }
          aria-label="Comparasion filter select"
          data-testid="comparison-filter"
        >
          {renderOptions(comparisonOptions)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Value</Form.Label>
        <Form.Control
          type="number"
          placeholder="Value to compare"
          aria-label="Value to compare"
          aria-describedby="Value filter input"
          ref={ valueSelector }
          data-testid="name-filter"
        />
      </Form.Group>

      <Button
        variant="secondary"
        data-testid="button-filter"
        onClick={ () => saveFilter(
          columnSelector.current.value,
          comparisonSelector.current.value,
          valueSelector.current.value,
        ) }
      >
        Add
      </Button>
    </Form>
  );
};

export default FilterByNumber;
