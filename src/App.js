import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import ModalMail from "./Components/ModalMail/ModalMail";
import Buttonmode from "./Components/DarkMode/Buttonmode";

const App = () => {
  const value = useSelector((store) => store.modalReducer.value);

  return (
    <>
      <Buttonmode/>
      {
        value ? <ModalMail/> : null
      }
      <Navbar />
    </>
  );
};

export default App;
