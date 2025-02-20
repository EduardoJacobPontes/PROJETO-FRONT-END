import React from "react";
import { CartaoContainer, Imagem, Titulo, Texto, Botao } from "./Style.js"; 
import { Link } from "react-router-dom";


function Cartao({ titulo, texto, imagem, botao, id }) {
    const link = `/Detalhes/${id}`;  // Construindo a URL dinâmica com o id
    return (
        <CartaoContainer>
            <Titulo>{titulo}</Titulo>
            <Imagem src={imagem} alt={titulo} />
            <Texto>{texto}</Texto>
            <Link to={link}>
                <Botao>{botao}</Botao>
            </Link>
        </CartaoContainer>
    );
  }
  
export default Cartao;