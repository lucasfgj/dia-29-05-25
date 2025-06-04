// src\pages\Lista\index.js
import axios from "axios";
import { useEffect, useState } from "react";
import CardapioDePratos from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/LogoRestauranteRatatullie.png";
import './styles.css'

function PaginaListaPratos() {
    const navigate = useNavigate()
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
        <div className='pagina-Cardapio'>
        <div className='container-cardapio'>
             <img className="logo" src={logo} alt="Logo da empresa" onClick={() => navigate('/')} />
                <h2 className="titulo">Cardapio Ratatouillie</h2>
                <CardapioDePratos/>
            {pratos.length === 0 ? (
                <button onClick={() => navigate('/Cadastro')} className='btn-cadastrar'>
                    Cadastrar Pratos
                </button>
            ) : (
                    <button onClick={() => navigate('/Cadastro')} className='btn_cadastrar'>
                    +
                    </button>
                )}
            </div>
        </div>
    )
}


export default PaginaListaPratos