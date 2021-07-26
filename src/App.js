import React from 'react';
import './App.css';
import { Accordion, Col, Row } from 'react-bootstrap';
import DataFilters from './components/filters/DataFilters';
import ColumnOrder from './components/filters/ColumnOrder';
import FiltersInUse from './components/filters/FiltersInUse';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Accordion as={ Row } className="w-50">
        <Accordion.Item eventKey="0" as={ Col }>
          <Accordion.Header>Filter by</Accordion.Header>
          <Accordion.Body>
            <DataFilters />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" as={ Col }>
          <Accordion.Header>Sort by</Accordion.Header>
          <Accordion.Body>
            <ColumnOrder />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <FiltersInUse />
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
