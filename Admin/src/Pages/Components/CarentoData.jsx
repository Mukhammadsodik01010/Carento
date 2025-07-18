import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleDelete = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const CarentoComponent = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({
      name: "",
      location: "",
      miles: "",
      gearType: "",
      fuelType: "",
      seats: "",
      cost: "",
      rank: "",
      reviews: "",
    });
  };
  const [carento, setCarento] = useState([]);

  const AllCarento = async () => {
    try {
      const carentoItem = await axios.get(
        "http://localhost:4000/carento-main/getting-all-items"
      );
      if (!carentoItem) {
        console.log("Error fetching all data");
      }
      setCarento(carentoItem.data);
    } catch (error) {
      console.log("Error Getting Carento List", error);
    }
  };

  useEffect(() => {
    AllCarento();
  }, []);

  const [form, setForm] = useState({
    name: "",
    location: "",
    miles: "",
    gearType: "",
    fuelType: "",
    seats: "",
    cost: "",
    rank: "",
    reviews: "",
  });
  const HandleAdd = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.location ||
      !form.miles ||
      !form.gearType ||
      !form.fuelType ||
      !form.seats ||
      !form.cost
    ) {
      setMessage("Please fill all the required fields");
      return;
    }
    try {
      setMessage("");
      setLoading(true);
      const resData = await axios.post(
        "http://localhost:4000/carento-main/adding-item",
        form
      );

      if (!resData) {
        setMessage("Something went wrong");
      }
      setMessage("");
      alert("Carento added Successfully");
      AllCarento();
      setOpen(false);
      setForm({
        name: "",
        location: "",
        miles: "",
        gearType: "",
        fuelType: "",
        seats: "",
        cost: "",
        rank: "",
        reviews: "",
      });
    } catch (error) {
      console.log("Error while registering", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [deleteID, setDeleteID] = useState("");
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDelete = async () => {
    try {
      const admin = await axios.delete(
        `http://localhost:4000/carento-main/delete-item-by-id/${deleteID}`
      );
      if (!admin) {
        alert("Admin is not found in the users list");
      }
      alert("Admin is deleted successfully");
      handleCloseDelete();
      AllCarento();
    } catch (error) {
      console.log("Error deleting Admin", error);
    }
  };

  const [editForm, setEditIdForm] = useState({
    name: "",
    location: "",
    miles: "",
    gearType: "",
    fuelType: "",
    seats: "",
    cost: "",
    rank: "",
    reviews: "",
  });
  const [editId, setEditId] = useState("");
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEditIdForm({
      name: "",
      location: "",
      miles: "",
      gearType: "",
      fuelType: "",
      seats: "",
      cost: "",
      rank: "",
      reviews: "",
    });
  };
  const EditCarento = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      const EditingData = await axios.put(
        `http://localhost:4000/carento-main/updating-item/${editId}`,
        editForm
      );
      if (!EditingData) {
        setMessage("Something went wrong, try again");
      }
      alert("Car updated successfully");
      AllCarento();
      setOpenEdit(false);
      setMessage("");
      setEditIdForm({
        name: "",
        location: "",
        miles: "",
        gearType: "",
        fuelType: "",
        seats: "",
        cost: "",
        rank: "",
        reviews: "",
      });
    } catch (error) {
      console.log("Error updating car", error);
      setMessage("Something went wrong while updating");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mb: "20px",
            mr: "30px",
          }}
        >
          <AddCircleIcon
            onClick={handleOpen}
            color="primary"
            sx={{ width: "70px", height: "70px" }}
          />
        </Box>
        <div className="gridBox">
          {carento.map((data, index) => (
            <Card key={data._id} sx={{ minWidth: 275, maxWidth: 300 }}>
              <CardContent>
                <Typography color="info" variant="h6">
                  {index + 1} Car
                </Typography>
                <Typography sx={{ mt: 1 }} color="success" variant="h6">
                  Name: {data.name}
                </Typography>
                <Typography color="success" variant="h6">
                  Cost: {data.cost}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="contained" color="primary" size="small">
                  Details
                </Button>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <EditIcon
                    color="info"
                    onClick={() => {
                      setEditId(data._id);
                      setEditIdForm(data);
                      handleOpenEdit();
                    }}
                  />
                  <DeleteIcon
                    color="error"
                    onClick={() => {
                      setDeleteID(data._id);
                      handleOpenDelete();
                    }}
                  />
                </Box>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
      {/* add new carento modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="info" variant="h5">
            Add New Carento Item
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "350px" }}>
              <Box sx={{ mt: 3 }}>
                <Typography>Name:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography>Location:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Product location"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Miles:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Your Password"
                  value={form.miles}
                  onChange={(e) => setForm({ ...form, miles: e.target.value })}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Gear Type:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Your Reminder"
                  value={form.gearType}
                  onChange={(e) =>
                    setForm({ ...form, gearType: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Fuel Type:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Your Reminder"
                  value={form.fuelType}
                  onChange={(e) =>
                    setForm({ ...form, fuelType: e.target.value })
                  }
                />
              </Box>
            </Box>
            <Box sx={{ width: "350px" }}>
              <Box sx={{ mt: 3 }}>
                <Typography>Seats:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the number of seats"
                  value={form.seats}
                  onChange={(e) => setForm({ ...form, seats: e.target.value })}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography>Cost:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the cost of the car"
                  value={form.cost}
                  onChange={(e) => setForm({ ...form, cost: e.target.value })}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Rank:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the rank"
                  value={form.rank}
                  onChange={(e) => setForm({ ...form, rank: e.target.value })}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Reviews:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write review"
                  value={form.reviews}
                  onChange={(e) =>
                    setForm({ ...form, reviews: e.target.value })
                  }
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={() => {
                setOpen(false);
                setForm({
                  name: "",
                  location: "",
                  miles: "",
                  gearType: "",
                  fuelType: "",
                  seats: "",
                  cost: "",
                  rank: "",
                  reviews: "",
                });
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={HandleAdd}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Box>
          {message && (
            <Typography sx={{ mt: 3 }} variant="h6" color="error">
              {message}
            </Typography>
          )}
        </Box>
      </Modal>
      {/* delete confirmation modal */}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleDelete}>
          <Typography sx={{ textAlign: "center" }} color="info" variant="h5">
            Are You Sure Deleting
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={handleCloseDelete}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleDelete}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* editing Modal */}
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="info" variant="h5">
            Edit Carento Item
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "350px" }}>
              <Box sx={{ mt: 3 }}>
                <Typography>Name:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Your Name"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, name: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography>Location:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write Product location"
                  value={editForm.location}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, location: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Miles:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the miles"
                  value={editForm.miles}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, miles: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Gear Type:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write gear type"
                  value={editForm.gearType}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, gearType: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Fuel Type:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write fuel type"
                  value={editForm.fuelType}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, fuelType: e.target.value })
                  }
                />
              </Box>
            </Box>
            <Box sx={{ width: "350px" }}>
              <Box sx={{ mt: 3 }}>
                <Typography>Seats:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the number of seats"
                  value={editForm.seats}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, seats: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography>Cost:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the cost of the car"
                  value={editForm.cost}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, cost: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Rank:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write the rank"
                  value={editForm.rank}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, rank: e.target.value })
                  }
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography>Reviews:</Typography>
                <Input
                  sx={{ width: "100%" }}
                  type="text"
                  placeholder="Write review"
                  value={editForm.reviews}
                  onChange={(e) =>
                    setEditIdForm({ ...editForm, reviews: e.target.value })
                  }
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={() => {
                setOpenEdit(false);
                setEditIdForm({
                  name: "",
                  location: "",
                  miles: "",
                  gearType: "",
                  fuelType: "",
                  seats: "",
                  cost: "",
                  rank: "",
                  reviews: "",
                });
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={EditCarento}
              disabled={loading}
            >
              {loading ? "Editing..." : "Edit"}
            </Button>
          </Box>
          {message && (
            <Typography sx={{ mt: 3 }} variant="h6" color="error">
              {message}
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CarentoComponent;
