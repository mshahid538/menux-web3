import * as React from "react";
import { Grid } from "@mui/material";

import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";

interface Column {
  id:
    | "businessid"
    | "restaurantName"
    | "allergies"
    | "dietary"
    | "isDesktop"
    | "isMobile"
    | "isMac"
    | "isiPhone"
    | "isWindows"
    | "os"
    | "ipAddress"
    | "dateTime";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number | string | string[]) => string;
}

const columns: readonly Column[] = [
  { id: "businessid", label: "Business Id", minWidth: 110 },
  { id: "restaurantName", label: "Business Name", minWidth: 130 },
  { id: "allergies", label: "Allergies", minWidth: 70 },
  { id: "dietary", label: "Dietary", minWidth: 100 },
  { id: "isDesktop", label: "Desktop", minWidth: 70 },
  { id: "isMobile", label: "Mobile", minWidth: 70 },
  { id: "isMac", label: "Mac", minWidth: 70 },
  { id: "isiPhone", label: "Iphone", minWidth: 70 },
  { id: "isWindows", label: "windows", minWidth: 70 },
  { id: "os", label: "Operating System", minWidth: 150 },
  { id: "ipAddress", label: "IP Address", minWidth: 70 },
  {
    id: "dateTime",
    label: "Date and Time",
    minWidth: 130,
    format: (value) => {
      if (Array.isArray(value)) {
        return value.join(", ");
      }
      const date = new Date(value);
      return date.toLocaleString();
    },
  },
];

export default function UserSessionData() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userData, setUserData] = useState([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getBooleanDisplayText(value: boolean): string {
    return value ? "Yes" : "No";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/userSessionData"
        );

        // Sort the data in descending order based on the timestamp
        response.data.sort(
          (a: any, b: any) =>
            new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
        );

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid className="header">
        <Header />
      </Grid>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          // paddingBottom: "100%",
          padding: "10px",
          margin: "7% 0 7% 0",
        }}
      >
        <TableContainer sx={{}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && column.id === "dateTime"
                              ? new Date(value).toLocaleString()
                              : typeof value === "boolean"
                              ? getBooleanDisplayText(value)
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
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
