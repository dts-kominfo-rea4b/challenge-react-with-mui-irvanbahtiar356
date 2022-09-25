import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Grid from "@mui/material/Grid";
import { Card, CardContent, List, ListItem } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ContactForm addNewContact={addNewContact} />
        </Grid>
        <Grid item xs={8}>
          {contacts.map((contact, index) => {
            return (
              <Card
                variant="outlined"
                sx={{ maxWidth: 500, bgcolor: "#e3f2fd" }}
              >
                <CardContent>
                  <List>
                    <ListItem key={index} disablePadding>
                      <Contact data={contact} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
