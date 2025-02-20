import styled from "styled-components";

const TopPart = styled.header`
  background-color: rgb(0, 37, 85);
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #topnav {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  #titulo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #tituloprincipal {
    font-weight: bold;
    font-size: 34px;
  }

  #texto {
    font-size: 18px;
    width: 450px;
    font-weight: lighter;
  }

  #imagem-direita {
    width: 120px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    margin-left: 20px;
    border-radius: 8px;
  }

  p {
    color: white;
  }
`;

export { TopPart };