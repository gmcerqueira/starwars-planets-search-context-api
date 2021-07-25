import React from 'react';
import './App.css';
import DataFilters from './components/filters/DataFilters';
import FiltersInUse from './components/filters/FiltersInUse';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <DataFilters />
      <FiltersInUse />
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
