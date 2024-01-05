import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PaswordGenerator from "./PaswordGenerator";

function App() {
  return (
    <>
      <h1>Password Generator</h1>
      <PaswordGenerator />
    </>
  );
}

export default App;
