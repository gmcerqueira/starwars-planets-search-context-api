import React from 'react';
import './App.css';
import DataOptions from './components/filters/DataOptions';
import FiltersInUse from './components/filters/FiltersInUse';
import DataTable from './components/table/DataTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="text-center mt-3 mb-5">
        <h1>START WARS</h1>
        <h2>Planets search</h2>
      </div>
      <div className="d-flex">
        <div className="w-25">
          <DataOptions />
          <FiltersInUse />
        </div>
        <DataTable />
      </div>
    </PlanetsProvider>
  );
}

export default App;
