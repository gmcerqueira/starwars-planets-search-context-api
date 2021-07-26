import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import PlanetsContext from '../../context/PlanetsContext';
import { sortByName, sortByValues } from '../../services/auxFuncs';

const TableBody = () => {
  const {
    data,
    filteringByName,
    returnFromFilter,
    filters: { sort },
  } = useContext(PlanetsContext);

  const formatDate = (date) => (
    <>
      <div>{date.match(/\d*:\d*/)}</div>
      <div>{date.match(/^\d*-\d*-\d*/)[0].split('-').reverse().join('/')}</div>
    </>
  );

  return (
    <tbody>
      {data
        && data
          .filter((planet) => filteringByName(planet))
          .filter((planet) => returnFromFilter(planet))
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
                <td>
                  {films.map((film, i) => (
                    <Alert key={ i } variant="dark" className="my-2 p-2">
                      <Alert.Link href={ film } target="_blank">{i + 1}</Alert.Link>
                    </Alert>
                  ))}
                </td>
                <td>{formatDate(created)}</td>
                <td>{formatDate(edited)}</td>
                <td>
                  <Alert variant="dark" className="my-1">
                    <Alert.Link href={ url } target="_blank">Link</Alert.Link>
                  </Alert>
                </td>
              </tr>
            ),
          )}
    </tbody>
  );
};

export default TableBody;
