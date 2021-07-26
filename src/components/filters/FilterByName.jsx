import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByName = () => {
  const { handleNameInput } = useContext(PlanetsContext);
  return (

    <Form>
      <Form.Group>
        <Form.Control
          placeholder="Planet name"
          aria-label="Planet name"
          aria-describedby="Search by planet name"
          onChange={ handleNameInput }
          data-testid="name-filter"
        />
      </Form.Group>
    </Form>
  );
};

export default FilterByName;
