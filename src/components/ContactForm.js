// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
  Card,
  Button,
  TextField,
  CardActions,
  CardContent,
} from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addNewContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  function handleChangeNewContactName(e) {
    setNewContact({ ...newContact, name: e.target.value });
  }

  function handleChangeNewContactPhone(e) {
    setNewContact({ ...newContact, phone: e.target.value });
  }

  function handleChangeNewContactEmail(e) {
    setNewContact({ ...newContact, email: e.target.value });
  }

  function handleChangeNewContactPhoto(e) {
    setNewContact({ ...newContact, photo: e.target.value });
  }

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 500, m: 4, bgcolor: "#e3f2fd" }}>
        <CardContent>
          <TextField
            label="Name"
            variant="filled"
            margin="normal"
            fullWidth
            value={newContact.name}
            onChange={handleChangeNewContactName}
          />
          <TextField
            label="Phone"
            variant="filled"
            margin="normal"
            fullWidth
            value={newContact.phone}
            onChange={handleChangeNewContactPhone}
          />
          <TextField
            label="Email"
            variant="filled"
            margin="normal"
            fullWidth
            value={newContact.email}
            onChange={handleChangeNewContactEmail}
          />
          <TextField
            label="Photo URL"
            variant="filled"
            margin="normal"
            fullWidth
            value={newContact.photo}
            onChange={handleChangeNewContactPhoto}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              addNewContact(newContact);
              setNewContact({
                name: "",
                phone: "",
                email: "",
                photo: "",
              });
            }}
          >
            ADD NEW CONTACT
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ContactForm;
