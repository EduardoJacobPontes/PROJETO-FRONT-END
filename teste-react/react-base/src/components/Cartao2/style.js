import styled from "styled-components";

// Estilo do Contêiner do Cartão (aumentando o tamanho)
// Estilo do Contêiner do Cartão
export const CartaoContainer = styled.div`
  background-color: #fff;
  border: 3px solid rgb(0, 37, 85); /* Borda azul com aumento da espessura */
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0px;
  flex: 1 1 220px; /* Cartões terão largura flexível com mínimo de 220px */
  max-width: 400px; /* Tamanho máximo para evitar que fiquem maiores */
  width: 100%; /* O cartão se adapta à largura do seu contêiner */
  box-sizing: border-box;
  height: 500px; /* Aumento da altura para dar mais espaço aos cartões */
`;


// Estilo da Imagem (aumentando o tamanho da imagem)
export const Imagem = styled.img`
  width: 200px; /* Aumentando o tamanho da imagem */
  height: 170px; /* Aumentando a altura da imagem */
  border-radius: 8px; /* Remover o border-radius circular */
  object-fit: cover;
  margin-bottom: 20px;
`;

// Estilo do Título
export const Titulo = styled.h3`
  font-size: 1.8em; /* Aumentando o tamanho da fonte */
  color: #666;
`;

// Estilo do Cargo
export const Cargo = styled.p`
  font-size: 1.3em; /* Aumentando o tamanho do cargo */
  color: rgb(0, 37, 85); /* Cor azul */
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Botao = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;


export const Texto = styled.p`
  font-size: 1em;  /* Tamanho da fonte */
  color: #333;  /* Cor do texto */
  line-height: 1.5;  /* Altura da linha para melhor legibilidade */
  margin-top: 10px;  /* Um pequeno espaçamento acima */
  margin-bottom: 10px;  /* Espaçamento abaixo do texto */
  text-align: left;  /* Alinhamento do texto à esquerda */
`;




// Estilo para o título "Sobre Nós"
export const TituloSobreNos = styled.h1`
  color: rgb(0, 37, 85); /* Cor azul */
  font-size: 2.5em; /* Tamanho do título */
  margin-bottom: 20px;
  text-align: center; /* Alinhando o título ao centro */
`;

// Estilo para a descrição "Sobre Nós"
export const DescricaoSobreNos = styled.p`
  color: rgb(0, 37, 85); /* Cor azul */
  font-size: 1.2em;
  text-align: center; /* Centralizando a descrição */
  margin-bottom: 40px;
`;

// Estilo para o contêiner dos cartões (na página Sobre Nós)
export const CartaoSobreNosContainer = styled.div`
  display: flex; /* Flexbox para alinhar os cartões em linha */
  flex-wrap: wrap; /* Permitindo que os cartões se ajustem em várias linhas, se necessário */
  justify-content: center; /* Centralizando os cartões */
  gap: 20px; /* Adicionando um espaço entre os cartões */
  margin-top: 40px;
`;