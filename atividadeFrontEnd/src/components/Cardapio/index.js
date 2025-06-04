// src\components\ListaDeUsuarios\index.js

import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

function Cardapio() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurantes")
        setPratos(response.data)
      } catch (error) {
        setPratos([])
      }
    };
    carregarPratos()
  }, [])

  
  return (
    <ul id="listaPratos" className="lista-pratos">
      {pratos.length === 0 ? (
        <li className="semCadastro">Nenhum prato cadastrado</li>
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
              <strong><p className="nomePrato">{prato.nomePrato}</p></strong> 
              
              <p className="descricao">{prato.descricao}</p>
              
              <strong><p className="preco">R${prato.preco}</p></strong> 
              <div className="divCatDisp">
              <div className="divCategoria">
              <strong>Categoria </strong> <p className="categoria">{prato.categoria}</p>
              </div>
              <div className="divDisponibilidade">
                  <strong>Disponibilidade </strong>
                <p className={`disponibilidade ${prato.disponibilidade === "DISPONIVEL" ? "disponivel" : "indisponivel" }`}>
                  {prato.disponibilidade === "DISPONIVEL" ? "DISPONIVEL" : "INDISPONIVEL"}
                </p>
              </div>
              </div>
            </li>
          </div>
        ))
      )}
    </ul>
  );
}

export default Cardapio;
