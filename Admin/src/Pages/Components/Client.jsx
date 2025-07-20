import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";

const ClientComponent = () => {
  const [client, setClient] = useState([]);

  const AllClients = async () => {
    try {
      const clientData = await axios.get(
        "http://localhost:4000/client/all-clients"
      );
      if (!clientData) {
        console.log("Error fetching all data");
      }
      setClient(clientData.data.client);
    } catch (error) {
      console.log("Error Getting amins List", error);
    }
  };

  useEffect(() => {
    AllClients();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Box className="gridBox">
          {client.map((clientUser, index) => (
            <Card key={clientUser._id} sx={{ minWidth: 275, maxWidth: 300 }}>
              <CardContent>
                <Typography color="info" variant="h6">
                  {index + 1} Client
                </Typography>
                <Typography sx={{ mt: 1 }} color="success" variant="h6">
                  Name: {clientUser.username}
                </Typography>
                <Typography color="success" variant="h6">
                  Email: {clientUser.email}
                </Typography>
                <Typography  variant="h6" sx={{fontSize:"12px"}}>
                  Joined: {clientUser.createdAt}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ClientComponent;
