import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import { sortByName, sortByValues } from '../../services/auxFuncs';

const TableBody = () => {
  const {
    data,
    filteringByName,
    returnFromFilter,
    filters: {
      sort,
    },
  } = useContext(PlanetsContext);

  return (
    <tbody>
      {data
        && data
          .filter((planet) => (filteringByName(planet)))
          .filter((planet) => (returnFromFilter(planet)))
          .sort((a, b) => {
            const { column } = sort;
            if (column === 'name') return sortByName(a, b, sort);
            return sortByValues(a, b, sort);
          })
          .map(
            ({
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td data-testid="planet-name">{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
    </tbody>
  );
};

export default TableBody;
