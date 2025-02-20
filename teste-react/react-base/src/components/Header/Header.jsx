import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next"; // Importa o hook de tradução

const Top = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  padding-left: 140px;
  position: relative;
  width: 100vw;
  min-height: 80px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #002855;
  background-color: transparent;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LanguageButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: 1px solid #002855;
  color: #002855;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const { i18n, t } = useTranslation(); // Hook para manipular o idioma
  const [idioma, setIdioma] = useState(i18n.language); // Estado para o idioma atual

  // Função para alternar entre os idiomas
  const alternarIdioma = () => {
    const novoIdioma = idioma === "en" ? "pt" : "en"; // Alterna entre "en" e "pt"
    i18n.changeLanguage(novoIdioma); // Muda o idioma no i18n
    setIdioma(novoIdioma); // Atualiza o estado
  };

  return (
    <Top>
      <a href="https://www.ibmec.br/" aria-label="IBMEC website">
        <Logo src="imagens/Logo-ibmec.png" alt="Logo IBMEC" />
      </a>
      <Nav>
        <NavLink to="/" aria-label={t("Home")}>{t("Home")}</NavLink>
        <NavLink to="/sobrenos" aria-label={t("Sobre Nos")}>{t("Sobre Nos")}</NavLink>
        <NavLink to="/Projetos" aria-label={t("Projetos")}>{t("Projetos")}</NavLink>
      </Nav>
      <LanguageButton onClick={alternarIdioma} aria-label="Change language">
        {idioma === "en" ? "PT" : "EN"}
      </LanguageButton>
    </Top>
  );
};

export default Header;
