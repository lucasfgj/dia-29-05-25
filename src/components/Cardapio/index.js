// src\components\ListaDeUsuarios\index.js

import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

function Cardapio() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurantes");
        setPratos(response.data);
      } catch (error) {
        alert("Erro ao buscar Pratos: ", error);
        setPratos([]);
      }
    };
    carregarPratos();
  }, []);

  return (
    <ul id="listaPratos" className="lista-pratos">
      {pratos.length === 0 ? (
        <li>Nenhum prato cadastrado</li>
      ) : (
        pratos.map((prato) => (
          <div className="card">
            <li key={prato.id} className="cardapio">
              <img
                src={prato.urlImagem}
                alt={prato.nomePrato}
                className="imagem-prato"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x200/E0E0E0/333333?text=Imagem+Não+Disponível";
                }}
              />
              <br />
              <strong>Nome do prato: </strong> {prato.nomePrato}
              <br />
              <strong>Descrição: </strong> {prato.descricao}
              <br />
              <strong>Preço: </strong> {prato.preco}
              <br />
              <strong>Categoria: </strong> {prato.categoria}
              <br />
              <strong>Disponibilidade </strong> {prato.disponibilidade}
              <br />
            </li>
          </div>
        ))
      )}
    </ul>
  );
}

export default Cardapio;
