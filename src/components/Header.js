// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <h1 className="title">CALL A FRIEND</h1>
      <p className="subtitle">Your friendly contact app</p>
    </>
  );
};

export default Header;
