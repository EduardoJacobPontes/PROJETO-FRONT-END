import { Link } from "react-router-dom";
import { TopPart } from "./style";

const Azul = (props) => (
  <TopPart>
    <div id="titulo">
      <p id='tituloprincipal'>
        {props.name}
      </p>
      <p id='texto'>
        {props.texto}
      </p>
    </div>
    {props.imagem && <img src={props.imagem} alt="Imagem do Projeto" id="imagem-direita" />}
  </TopPart>
);

export default Azul;
