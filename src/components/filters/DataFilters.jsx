import React from 'react';
import { Accordion } from 'react-bootstrap';
import FilterByName from './FilterByName';
import FilterByNumber from './FilterByNumber';
import '../../style/test.css';

const DataFilters = () => (
  <Accordion className="w-100">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Name</Accordion.Header>
      <Accordion.Body>
        <FilterByName />
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Comparison</Accordion.Header>
      <Accordion.Body>
        <FilterByNumber />
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default DataFilters;
