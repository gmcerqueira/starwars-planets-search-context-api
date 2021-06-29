import React from 'react';
import './App.css';
import DataFilters from './components/filters/DataFilters';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <DataFilters />
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
