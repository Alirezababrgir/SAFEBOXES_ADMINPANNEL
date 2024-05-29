import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

const columns = [
  { id: 'name', label: 'COUNT', minWidth: 40 },
  { id: 'code', label: 'UID', minWidth: 40 },
  { id: 'code', label: 'UID', minWidth: 40 },

  {
    id: 'size',
    minWidth: 50,
    format: (value) => value.toLocaleString('en-US'),
  },

];


export default function ColumnGroupingTable({ listData: rows, handleLink1, handleLink2, handleLink3, handleLink4, colorlist1, colorlist2, colorlist3, colorlist4 }) {

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const row = [
    createData('first click authenticate'),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Paper sx={{ borderRadius: "1rem", mt: 2, padding: "0px" }}>
        <TableContainer sx={{ maxHeight: "60vh", borderRadius: "0.5rem" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" >
                  <button onClick={handleLink1} style={{ border: "none", cursor: "pointer", borderRadius: "1rem", padding: "5px", color: colorlist1 }}>
                    10%
                  </button>
                </TableCell>
                <TableCell align="center" >
                  <button onClick={handleLink2} style={{ border: "none", cursor: "pointer", borderRadius: "1rem", padding: "5px", color: colorlist2 }}>
                    25%
                  </button>
                </TableCell>
                <TableCell align="center">
                  <button onClick={handleLink3} style={{ border: "none", cursor: "pointer", borderRadius: "1rem", padding: "5px", color: colorlist3 }}>
                    60%
                  </button>
                </TableCell>
                <TableCell align="center">
                  <button onClick={handleLink4} style={{ border: "none", cursor: "pointer", borderRadius: "1rem", padding: "5px", color: colorlist4 }}>
                    150%
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                {rows ? columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                )) : ""}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows ? rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                }) : row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows ? rows.length : row.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
/*
<TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Details
              </TableCell>
              <TableCell align="center" colSpan={2}>
                defult form
              </TableCell>
            </TableRow>
            */