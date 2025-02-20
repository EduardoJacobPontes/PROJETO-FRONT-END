import React from "react";
import { useTranslation } from "react-i18next"; // Importa o hook de tradução
import Base from "./Base";
import Azul from "../components/Azul/azul";
import ProjetoCartoes from "../components/ProjetoCartoes/ProjetoCartoes";

const Home = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções

  return (
    <Base>
      <Azul
        name={t("portfolioTitle")} // Título traduzido
        texto={t("portfolioDescription")} // Descrição traduzida
      />
      <ProjetoCartoes />
    </Base>
  );
};

export default Home;
