// src\pages\Lista\index.js

import CardapioDePratos from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaPratos() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-Cardapio'>
            <div className='container-cardapio'>
                <h2>Cardapio Ratatouillie</h2>
                <CardapioDePratos/>
                <button onClick={() => navigate('/Cadastro')} className='link-voltar'>
                    Cadastrar Pratos
                </button>
            </div>
        </div>
    )
}

export default PaginaListaPratos