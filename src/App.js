import React from 'react';
import './App.css';
import DataTable from './components/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
