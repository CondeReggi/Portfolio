import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import ModalMail from "./Components/ModalMail/ModalMail";

const App = () => {
  const value = useSelector((store) => store.modalReducer.value);

  return (
    <>
      {
        value ? <ModalMail/> : null
      }
      <Navbar />
    </>
  );
};

export default App;
