import React, { useState, useEffect } from "react";

export default function PaswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(7);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);

  const handleGenerate = () => {
    let answer = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      if (symbol) {
        characters += "!@#$%^&*()_+<>?/.,:=~`{}|[]-\\\"': ";
      }
      if (number) {
        characters += "0123456789";
      }
      if (capitalLetter) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      let randomText = Math.floor(Math.random() * characters.length);
       answer += characters.charAt(randomText);
    }
    setPassword(answer);
  };

  useEffect(() => {
    handleGenerate();
  }, [length, number, symbol, capitalLetter]);

  return (
    <div>
      <p>{password}</p>
      {length}
      <input
        type="range"
        name="number"
        id="range"
        min="7"
        max="15"
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <br />
      <label htmlFor="number">Number</label>
      <input
        type="checkbox"
        name="number"
        id="number"
        checked={number}
        onChange={(e) => {
          setNumber(e.target.checked);
        }}
      />
      <br />
      <label htmlFor="symbol">Symbol</label>
      <input
        type="checkbox"
        name="symbol"
        id="symbol"
        checked={symbol}
        onChange={(e) => {
          setSymbol(e.target.checked);
        }}
      />
      <br />
      <label htmlFor="capLetter">Capital Letter</label>
      <input
        type="checkbox"
        name="capLetter"
        id="capLetter"
        checked={capitalLetter}
        onChange={(e) => {
          setCapitalLetter(e.target.checked);
        }}
      />
    </div>
  );
}
