import React, { useState, useEffect } from "react";
import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import Header from "../Header/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "../Admin/Dashboard/Modals/EditModal"; // Create an EditModal component
import ConfirmationModal from "../Admin/Dashboard/Modals/ConfirmationModal"; // Create a ConfirmationModal component

export default function ProductsData({ isAdmin }) {
  const columns = [
    { id: "name", label: "Product", minWidth: 130 },
    { id: "description", label: "Description", minWidth: 100 },
    { id: "notSuitable", label: "Not Suitable", minWidth: 130 },
    { id: "mayContain", label: "May Contain", minWidth: 140 },
    { id: "ingredients", label: "Ingredients", minWidth: 120 },
    { id: "freeFrom", label: "Free From", minWidth: 120 },
    { id: "askToModify", label: "Ask To Modify", minWidth: 150 },
    { id: "crossContamination", label: "Cross Contamination", minWidth: 120 },
    { id: "contains", label: "Contains", minWidth: 120 },
    {
      id: "actions",
      label: "Actions",
      minWidth: 100,
      format: (value, row) => (
        <div>
          <IconButton
            onClick={() => handleEdit(row)}
            aria-label="Edit"
            color="primary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(row)}
            aria-label="Delete"
            color="secondary"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [userData, setUserData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getBooleanDisplayText(value) {
    return value ? "Yes" : "No";
  }

  // Handle Edit
  const handleEdit = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };

  const handleDelete = (row) => {
    setRowToDelete(row);
    setConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      if (rowToDelete) {
        const productId = rowToDelete._id;

        const response = await axios.delete(
          `http://localhost:5000/products/${productId}`
        );

        if (response.data.success) {
          setSnackbarMessage(response.data.message);
          setSnackbarOpen(true);

          const updatedData = userData.filter((row) => row !== rowToDelete);
          setUserData(updatedData);

          setConfirmationModalOpen(false);
        } else {
          console.error("Product deletion failed:", response.data.message);
        }
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log("first", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!isAdmin && (
        <Grid className="header">
          <Header islogin={true} />
        </Grid>
      )}
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          // paddingBottom: "100%",
          padding: "10px",
          margin: !isAdmin ? "7% 0 7% 0" : "0vh",
          height: !isAdmin ? "auto" : "75vh",
        }}
      >
        <TableContainer sx={{}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ fontSize: "1.10rem" }}
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
                            {column.format
                              ? column.format(value, row)
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

      <EditModal
        open={isEditModalOpen}
        onClose={closeEditModal}
        row={selectedRow}
        onSave={(editedData) => {
          console.log("Saving edited data:", editedData);
        }}
      />

      <ConfirmationModal
        open={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={confirmDelete}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        // sx={{ backgroundColor: "green" }}
      />
    </>
  );
}
