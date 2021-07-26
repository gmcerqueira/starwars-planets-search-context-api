import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByName = () => {
  const { handleNameInput } = useContext(PlanetsContext);
  return (
    <Form className="mb-3">
      <Form.Group>
        <Form.Label id="basic-addon1">Name</Form.Label>
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
