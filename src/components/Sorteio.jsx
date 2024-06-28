import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

function Sorteio(props) {
  const { min, max } = props;

  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;

  return (
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
