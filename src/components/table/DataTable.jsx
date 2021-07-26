import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const DataTable = () => (
  <Table
    striped
    hover
    variant="dark"
    className="text-center text-capitalize align-middle overflow-auto my-0"
  >
    <TableHeader />
    <TableBody />
  </Table>
);

export default DataTable;
