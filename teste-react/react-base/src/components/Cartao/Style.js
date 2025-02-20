import styled from "styled-components";

const CartaoContainer = styled.div`
    width: 280px; 
    height: 380px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */

    &:hover {
        transform: translateY(-10px); /* Move o cartão 10px para cima */
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra mais intensa */
    }
`;

const Imagem = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
`;

const Titulo = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    margin: 10px 0;
`;

const Texto = styled.p`
    font-size: 1rem;
    color: #555;
    text-align: justify;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
`;

const Botao = styled.button`
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    background-color: #F5AC00;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export { CartaoContainer, Imagem, Titulo, Texto, Botao };
