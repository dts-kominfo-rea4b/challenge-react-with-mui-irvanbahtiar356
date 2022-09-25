// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email

  return (
    <Card variant="outlined" sx={{ maxWidth: 500, bgcolor: "#e3f2fd" }}>
      <CardContent>
        <List>
          {data.map((contact, index) => {
            return (
              <ListItem key={index} disablePadding sx={{ m: 2 }}>
                <ListItemAvatar>
                  <Avatar>
                    <img src={contact.photo} alt="avatar" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.name} />
                <ListItemText secondary={contact.phone} />
                <ListItemText secondary={contact.email} />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Contact;
