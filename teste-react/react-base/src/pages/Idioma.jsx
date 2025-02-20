import React, { useState } from 'react';
import Base from './Base';
import ListContainer from '../components/ListContainer/ListContainer';
import { useTranslation } from 'react-i18next';

// IMPORTANDO A CONFIGURAÇÃO DO i18next
import '../i18n'; // Certifique-se de que o caminho está correto

const Idioma = () => {
  const { t, i18n } = useTranslation();  // Hook para tradução e mudança de idioma
  const [idioma, setIdioma] = useState(i18n.language); // Define o idioma atual

  // Função para mudar o idioma
  const mudarIdioma = (idiomaEscolhido) => {
    i18n.changeLanguage(idiomaEscolhido);  // Troca o idioma
    setIdioma(idiomaEscolhido);  // Atualiza o estado local
  };

  return (
    <Base>
      <ListContainer>
        <button type="button" onClick={() => mudarIdioma('en')}>
          {t('english')}
        </button>
        <button type="button" onClick={() => mudarIdioma('pt')}>
          {t('portuguese')}
        </button>
        <p>{t('language')}: {idioma === 'en' ? t('english') : t('portuguese')}</p>
      </ListContainer>
    </Base>
  );
};

export default Idioma;