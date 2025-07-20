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
  width: 400,
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

const AdminsComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setPassword("");
    setReminder("");
  };
  const [admin, setAdmin] = useState([]);

  const AllAdmins = async () => {
    try {
      const admin = await axios.get(
        "http://localhost:4000/carento-admins/getting-all-admins"
      );
      if (!admin) {
        console.log("Error fetching all data");
      }
      setAdmin(admin.data);
    } catch (error) {
      console.log("Error Getting amins List", error);
    }
  };


  
  useEffect(() => {
    AllAdmins();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reminder, setReminder] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const HandleAdd = async (e) => {
      e.preventDefault();
      if (!name || !email || !password || !reminder) {
          setMessage("Please fill all the required fields");
          return;
      }
    if (reminder !== password) {
      setMessage("Password doesn't match");
      return;
    }
      try {
        setMessage("")
      setLoading(true);
      const resData = await fetch(
        "http://localhost:4000/carento-admins/adding-new-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, reminder }),
        }
      );

      const data = await resData.json();
      if (resData.ok) {
        setMessage("");
        alert("Admin added Successfully");
        AllAdmins();
        setOpen(false);
        setName("");
        setEmail("");
        setPassword("");
        setReminder("");
      } else {
        setMessage("Email is already in use");
      }
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
        `http://localhost:4000/carento-admins/deleting-admins/${deleteID}`
      );
      if (!admin) {
        alert("Admin is not found in the users list");
      }
      alert("Admin is deleted successfully");
      handleCloseDelete();
      AllAdmins();
    } catch (error) {
      console.log("Error deleting Admin", error);
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
          {admin.map((admin, index) => (
            <Card key={admin._id} sx={{ minWidth: 275, maxWidth: 300 }}>
              <CardContent>
                <Typography color="info" variant="h6">
                  {index + 1} Admin
                </Typography>
                <Typography sx={{ mt: 1 }} color="success" variant="h6">
                  Name: {admin.name}
                </Typography>
                <Typography color="success" variant="h6">
                  Email: {admin.email}
                </Typography>
                <Typography color="success" variant="h6">
                  Reminder: {admin.reminder}
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
                  <EditIcon color="info" />
                  <DeleteIcon
                    color="error"
                    onClick={() => {
                      setDeleteID(admin._id);
                      handleOpenDelete();
                    }}
                  />
                </Box>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="info" variant="h5">
            Add New Admin
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography>Name:</Typography>
            <Input
              sx={{ width: "100%" }}
              type="text"
              placeholder="Write Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography>Email:</Typography>
            <Input
              sx={{ width: "100%" }}
              type="text"
              placeholder="Write Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>Password:</Typography>
            <Input
              sx={{ width: "100%" }}
              type="text"
              placeholder="Write Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>Reminder:</Typography>
            <Input
              sx={{ width: "100%" }}
              type="text"
              placeholder="Write Your Reminder"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
            />
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
                setName("");
                setEmail("");
                setPassword("");
                setReminder("");
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
    </>
  );
};

export default AdminsComponent;
