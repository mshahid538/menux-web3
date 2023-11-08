import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function EditModal({ open, onClose, row, onSave }) {
  const [editedData, setEditedData] = useState({ ...row });
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control the Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message

  const handleSave = async () => {
    try {
      // Send a PUT request to update the product
      const response = await axios.put(
        `http://localhost:5000/products/${editedData._id}`,
        editedData
      );

      if (response.data.success) {
        setSnackbarMessage(response.data.message);
        setSnackbarOpen(true);

        onClose();
      } else {
        console.error("Product update failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Product"
          value={editedData.name}
          onChange={handleFieldChange}
        />
        <TextField
          name="description"
          label="Description"
          value={editedData.description}
          onChange={handleFieldChange}
        />
        {/* more fields for other columns  */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
