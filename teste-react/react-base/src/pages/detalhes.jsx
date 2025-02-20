import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Importa o hook de tradução
import Base from "./Base"; // Componente Base
import Azul from "../components/Azul/azul"; // Seção azul superior
import { useParams } from "react-router-dom";
import projetos from "../data/projetos.json";
import styled from "styled-components";

// Novo estilo para a seção de conteúdo abaixo
const ConteudoExtra = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o conteúdo */
  font-family: Arial, sans-serif;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const Detalhes = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções
  const { id } = useParams();
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    const projeto = projetos.find((item) => item.id === parseInt(id));
    setDetalhes(projeto);
  }, [id]);

  if (!detalhes) {
    return <p>{t("loadingProjectInfo")}</p>; // Texto traduzido
  }

  // Função para substituir placeholders por elementos JSX
  const renderTextoComMarcadores = (texto) => {
    if (!texto) return t("infoNotAvailable"); // Texto traduzido
    return t(texto)
      .split("[TITULO]")
      .map((parte, index) =>
        index === 0 ? (
          parte
        ) : (
          <>
            <strong>{t(detalhes.titulo)}</strong>
            {parte}
          </>
        )
      );
  };

  return (
    <Base>
      {/* Seção Azul Superior */}
      <Azul
        name={t(detalhes.titulo)} // Título traduzido
        texto={renderTextoComMarcadores(detalhes.texto)} // Processa a descrição com placeholders
        imagem={detalhes.imagem}
      />

      {/* Nova Seção para o Conteúdo Extra */}
      <ConteudoExtra>
        <h2>{t("aboutProject")}</h2> {/* Título traduzido */}
        <p>{renderTextoComMarcadores(detalhes.conteudo)}</p>

        <h2>{t("projectDetails")}</h2> {/* Título traduzido */}
        <ul>
          <li>{t("projectStart")}: {t(detalhes.inicio)}</li>
          <li>{t("projectDuration")}: {t(detalhes.duracao)}</li>
          <li>{t("projectTeam")}: {t(detalhes.equipe)}</li>
          <li>{t("projectLocation")}: {t(detalhes.local)}</li>
        </ul>

        <p>{t("contactForQuestions")}</p> {/* Texto traduzido */}
      </ConteudoExtra>
    </Base>
  );
};

export default Detalhes;
