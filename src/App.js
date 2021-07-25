import React from 'react';
import './App.css';
import DataFilters from './components/filters/DataFilters';
import ColumnOrder from './components/filters/ColumnOrder';
import FiltersInUse from './components/filters/FiltersInUse';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <DataFilters />
      <FiltersInUse />
      <ColumnOrder />
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
