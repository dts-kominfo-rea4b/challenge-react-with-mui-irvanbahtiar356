import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Grid from "@mui/material/Grid";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contact, setContact] = useState(contactsJSON);
  console.log(contact);

  const addNewContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ContactForm addNewContact={addNewContact} />
        </Grid>
        <Grid item xs={8}>
          <Contact data={contact} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
