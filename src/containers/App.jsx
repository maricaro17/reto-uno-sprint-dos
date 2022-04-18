import React from "react";
import Header from "../components/Header.jsx";
import { StyleGlobal } from "../styles/styleGlobal.js";
import "../styles/styles.css"
import CardList from "./CardList";
function App() {
  return (
    <div>
      <StyleGlobal/>
      <Header/>
      <CardList/>
    </div>
  );
}

export default App;
