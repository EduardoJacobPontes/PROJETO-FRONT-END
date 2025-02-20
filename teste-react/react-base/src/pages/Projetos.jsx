import React from "react";
import { useTranslation } from "react-i18next"; // Importa o hook de tradução
import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";
import dados_projetos from "../data/projetos.json";
import ProjetoCartoes from "../components/ProjetoCartoes/ProjetoCartoes";

const Projetos = () => {
  const { t } = useTranslation(); // Hook para acessar traduções

  // Atualiza os dados do JSON para usar traduções
  const dados = dados_projetos.map((item) => ({
    ...item,
    titulo: t(`project${item.id}Title`), // Tradução do título
    texto: t(`project${item.id}Text`), // Tradução do texto
    botao: t("projectButton"), // Tradução do botão
  }));

  return (
    <Base>
      <ListContainer>
        {dados.map((item) => (
          <Cartao
            key={item.id} // Agora usa o id do projeto
            titulo={item.titulo} // Título traduzido
            texto={item.texto} // Texto traduzido
            imagem={item.imagem} // Imagem permanece a mesma
            botao={item.botao} // Botão traduzido
            id={item.id} // Passa o id para a página de detalhes
            showBotao={true}
            showDescricao={true}
          />
        ))}
      </ListContainer>
    </Base>
  );
};

export default Projetos;
