import styled from "styled-components";

const Top = styled.header`
  padding: 0.5em 2em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  position: fixed; /* Faz o header ficar fixo */
  top: 0; /* Posiciona no topo da tela */
  width: 100%; /* Garante que ocupe toda a largura da tela */
  z-index: 1000; /* Certifica que fique acima de outros elementos */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra para destaque */

  a {
    text-align: center;
    padding: 0.3em;
    margin: 0 0.7em;
    min-width: 5em;
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    /* border-radius: .3em; */
    &:hover {
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }
`;

export { Top };
