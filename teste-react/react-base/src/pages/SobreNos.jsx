import React from "react";
import Base from "./Base";
import Cartao2 from "../components/Cartao2/Cartao2";
import { TituloSobreNos, DescricaoSobreNos, CartaoSobreNosContainer } from "../components/Cartao2/style";

const dados = [
  {
    nome: "Eduardo Jacob Pontes",
    cargo: "Engenheiro de Software",
    descricao: "Com vasta experiência no desenvolvimento de sistemas robustos e escaláveis..",
    imagem: "imagens/iconeazuldeperfil.png",
    link: "#"
  },
  {
    nome: "João Marcio",
    cargo: "Engenheiro de Software",
    descricao: "João Marcio traz consigo uma bagagem sólida em engenharia de software.",
    imagem: "imagens/iconeazuldeperfil.png",
    link: "#"
  },
  {
    nome: "Guilherme Pardelhas",
    cargo: "Cientista de Dados e IA",
    descricao: "Guilherme é um cientista de dados apaixonado por inteligência artificial.",
    imagem: "imagens/iconeazuldeperfil.png",
    link: "#"
  },
  {
    nome: "Eduardo Andrade",
    cargo: "Engenheiro da Computação",
    descricao: "Eduardo é um profissional de engenharia da computação.",
    imagem: "imagens/iconeazuldeperfil.png",
    link: "#"
  },
  {
    nome: "Bernardo Ottan",
    cargo: "Engenheiro da Computação",
    descricao: "Bernardo Ottan possui uma forte formação em engenharia da computação.",
    imagem: "imagens/iconeazuldeperfil.png",
    link: "#"
  }
];

const SobreNos = () => (
  <Base>
    <section id="sobre-nos">
      <TituloSobreNos>Sobre Nós</TituloSobreNos>
      <DescricaoSobreNos>Conheça um pouco sobre nossa equipe</DescricaoSobreNos>

      {/* Usando o contêiner flex para os cartões */}
      <CartaoSobreNosContainer>
        {dados.map((ele, i) => (
          <Cartao2
            key={i}
            nome={ele.nome}
            cargo={ele.cargo}
            descricao={ele.descricao}
            imagem={ele.imagem}
            link={ele.link}
            showBotao={false}  // Não exibe o botão "Saiba Mais"
            showDescricao={true} // Garante que a descrição seja exibida
          />
        ))}
      </CartaoSobreNosContainer>
    </section>
  </Base>
);

export default SobreNos;








