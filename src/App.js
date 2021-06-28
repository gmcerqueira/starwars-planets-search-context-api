import React from 'react';
import './App.css';
import FilterByName from './components/filters/FilterByName';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
