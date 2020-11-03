import React from "react";
import "./App.css";
import Header from "./components/Header";
import Programme from "./components/Programme";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Programme data={data}></Programme>
      </div>
    </>
  );
}

export default App;
