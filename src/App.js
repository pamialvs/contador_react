import "./styles.css";
import { useState } from "react";
import styled from "styled-components";

const Contador = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 15px;
  display: inline-block;
`;

const TituloPrincipal = styled.h1`
  color: red;
  font-size: 48px;
  text-align: center;
`;

const Botao = styled.button`
  background-color: red;
  color: black;
  font-size: 48px;
  margin: 10px;
  border-radius: 15px;
  text-align: center;
`;

export default function App() {
  const [numero, setNumero] = useState(0);

  const Adicionar = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };
  const Diminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <section>
      <Contador>
        <TituloPrincipal>{numero}</TituloPrincipal>
        <Botao onClick={Adicionar}>+</Botao>
        <Botao onClick={Diminuir}>-</Botao>
      </Contador>
    </section>
  );
}
