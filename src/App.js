import React from "react";
import "./App.css";
// import Card from "./components/Card";
import Intervalo from "./components/Intervalo";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import Divisao from "./components/Divisao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";

function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Soma></Soma>
        <Subtracao></Subtracao>
      </div>
      <div className="linha">
        <Multiplicacao></Multiplicacao>
        <Divisao></Divisao>
      </div>
      <div className="linha">
        <Media></Media>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
