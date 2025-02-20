import styled from "styled-components";

const Div = styled.div`
  margin-left: 85px;
  margin-right: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  padding-bottom: 50px;

  & > * {
    flex: 1 1 calc(25% - 20px); /* 4 cartões por linha */
    max-width: calc(25% - 20px);
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 15px;
  flex-wrap: wrap;

  select {
    width: 200px;
    height: 40px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .limpar-filtros {
    background-color: rgb(245, 172, 0);
    border-radius: 7px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
  }

  .limpar-filtros:hover {
    background-color: #fff;
  }
`;

const Container2 = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  #inputWraper {
    background-color: white;
    width: 300px;
    border-radius: 10px;
    height: 2.5rem;
    padding: 0 15px;
    box-shadow: 0px 0px 8px #ddd;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
  }

  input {
    background-color: transparent;
    border: none;
    height: 100%;
    margin-left: 5px;
    width: 100%;
    font-size: 16px;
  }

  input::placeholder {
    font-style: italic;
    color: #aaa;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .search-bar input {
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }

  .search-bar input::placeholder {
    color: #aaa;
  }
`;

export { Div, Container, Container2 };
