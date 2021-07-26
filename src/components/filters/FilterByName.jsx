import React, { useContext } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';

const FilterByName = () => {
  const { handleNameInput } = useContext(PlanetsContext);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
      <FormControl
        placeholder="Planet name"
        aria-label="Planet name"
        aria-describedby="Search by planet name"
        onChange={ handleNameInput }
        data-testid="name-filter"
      />
    </InputGroup>
  );
};

export default FilterByName;
