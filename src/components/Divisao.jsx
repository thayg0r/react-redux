import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

const Divisao = (props) => {
  const { min, max } = props;
  const resultado = (min / max).toFixed(1);
  return (
    <Card title="Divisão dos Números" brown>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{resultado}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Divisao);
