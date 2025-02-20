import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import Cartao from '../Cartao/Cartao';
import { Div, Container2, Container } from './Style';
import Select from 'react-select';
import projetos from "../../data/projetos.json"; // JSON com os projetos

const options1 = [
  { value: 'React', label: 'React' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Python', label: 'Python' },
  { value: 'Assembly', label: 'Assembly' },
];

const options2 = [
  { value: 'Ibmec Barra', label: 'Ibmec Barra' },
  { value: 'Ibmec Centro', label: 'Ibmec Centro' },
  { value: 'Ibmec BH', label: 'Ibmec BH' },
];

const options4 = [
  { value: '2022.1', label: '2022.1' },
  { value: '2022.2', label: '2022.2' },
  { value: '2023.1', label: '2023.1' },
  { value: '2023.2', label: '2023.2' },
  { value: '2024.1', label: '2024.1' },
  { value: '2024.2', label: '2024.2' },
];

function ProjetoCartoes() {
  const { t } = useTranslation(); // Hook para acessar as traduções
  const [dados, setDados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [filtroTecnologia, setFiltroTecnologia] = useState(null);
  const [filtroUnidade, setFiltroUnidade] = useState(null);
  const [filtroPeriodo, setFiltroPeriodo] = useState(null);

  // Adiciona IDs dinamicamente aos projetos carregados
  const listcartoes = projetos.map((item, index) => ({
    ...item,
    id: item.id || index + 1, // Se o id não existir, cria dinamicamente
  }));

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
    const filtro = e.target.value.toLowerCase();
    const filtrados = listcartoes.filter((item) =>
      t(item.titulo).toLowerCase().includes(filtro) ||
      t(item.texto).toLowerCase().includes(filtro)
    );
    setDados(filtrados);
  };

  const handleLimparFiltros = () => {
    setPesquisa("");
    setFiltroTecnologia(null);
    setFiltroUnidade(null);
    setFiltroPeriodo(null);
    setDados(listcartoes); // Restaura a lista completa
  };

  useEffect(() => {
    setDados(listcartoes); // Carrega a lista ao montar o componente
  }, []);

  return (
    <>
      <Container>
        <Select
          options={options1}
          placeholder={t("technology")} // Placeholder traduzido
          value={filtroTecnologia}
          onChange={setFiltroTecnologia}
          id="select"
        />
        <Select
          options={options2}
          placeholder={t("campus")} // Placeholder traduzido
          value={filtroUnidade}
          onChange={setFiltroUnidade}
          id="select"
        />
        <Select
          options={options4}
          placeholder={t("period")} // Placeholder traduzido
          value={filtroPeriodo}
          onChange={setFiltroPeriodo}
          id="select"
        />
        <button onClick={handleLimparFiltros} className="limpar-filtros">
          {t("clearFilters")} {/* Texto do botão traduzido */}
        </button>
      </Container>
      
      <Container2>
        <h1>{t("projects")}</h1> {/* Título traduzido */}
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("searchPlaceholder")} // Placeholder traduzido
            value={pesquisa}
            onChange={handlePesquisa}
          />
        </div>
      </Container2>

      <Div>
        {dados.map((item) => (
          <Cartao
            key={item.id} // Agora usa o id gerado dinamicamente
            titulo={t(item.titulo)} // Traduz o título
            texto={t(item.texto)} // Traduz o texto
            imagem={item.imagem}
            botao={t(item.botao)} // Traduz o texto do botão
            id={item.id} // Passa o id para a página de detalhes
            showBotao={true}
            showDescricao={true}
          />
        ))}
      </Div>
    </>
  );
}

export default ProjetoCartoes;
