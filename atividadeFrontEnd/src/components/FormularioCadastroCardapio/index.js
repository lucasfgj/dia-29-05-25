// src\components\FormularioCadastro\index.js

import axios from "axios";
import { useState } from "react";
import logo from "../../assets/images/LogoRestauranteRatatullie.png";
import useMensagem from "../../hooks/useMensagem";
import MensagemFeedback from "../MensagemFeedback";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function FormularioCadastro() {
  const navigate = useNavigate()
  const [nomePrato, setnomePrato] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [urlImagem, seturlImagem] = useState('');


  const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } =
    useMensagem();

  const cadastrarUsuario = async () => {
    try {
const response = await axios.post('http://localhost:8080/restaurantes', {
        nomePrato,
        descricao,
        preco,
        categoria,
        disponibilidade,
        urlImagem,
      });
      exibirMensagem(
        response.data.mensagem || "Prato cadastrado com sucesso!",
        "sucesso"
      )
      setnomePrato('')
      setDescricao('')
      setPreco('')
      setCategoria('')
      setDisponibilidade('')
      seturlImagem('')
    } catch (error) {
      let erroMsg = "Erro ao conectar ao servidor.";
      if (error.response && error.response.data) {
        erroMsg = error.response.data.mensagem;
        if (error.response.data.erros) {
          erroMsg += ' ' + Object.values(error.response.data.erros).join(", ");
        }
      }
      exibirMensagem(erroMsg, "erro");
    }
  };

  return (
    <div className="containerCadastro">
      <img src={logo} alt="Logo da empresa" onClick={() => navigate('/')} />
      <h2>Cadastro de Pratos</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarUsuario();
        }}
      >
        <input
          type="text"
          id="nome"
          placeholder="Nome do Prato"
          value={nomePrato}
          onChange={(e) => setnomePrato(e.target.value)}
          required
        />
        <textarea
          type="text"
          id="descricao"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="text"
          id="preco"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria">
          <option value="" selected>
            Selecione a categoria
          </option>
          <option value="ENTRADA">Entrada</option>
          <option value="PRATO_PRINCIPAL">Prato Principal</option>
          <option value="SOBREMESA">Sobremesa</option>
          <option value="BEBIDA">Bebida</option>
        </select>

        <select id="disponibilidade" value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)}
          placeholder="Disponibilidade">
          <option value=""  selected>
            Selecione a disponibilidade </option>
          <option value="DISPONIVEL">Disponível</option>
          <option value="INDISPONIVEL">Indisponível</option>
        </select>
        <input
          type="text"
          id="imagemPrato"
          placeholder="URL da imagem"
          value={urlImagem}
          onChange={(e) => seturlImagem(e.target.value)}
          required
        />
        {urlImagem && <img src={urlImagem} alt="Pré-visualização" style={{ marginTop: "10px", maxWidth: "300px" }} />}

        <button className="buttonFormCadastro" type="submit">Cadastrar</button>
      </form>

      <MensagemFeedback
        mensagem={mensagem}
        tipo={tipoMensagem}
        visivel={visivel}
        onclose={fecharMensagem}
      />
    </div>
  );
}

export default FormularioCadastro;
