import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const DataTable = () => (
  <Table striped bordered hover variant="dark">
    <TableHeader />
    <TableBody />
  </Table>
);

export default DataTable;
