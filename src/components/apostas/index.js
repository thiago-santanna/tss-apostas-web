import axios from "axios";
import { useEffect, useState } from "react";
import { formatLocalDate } from '../../utils/formatDate';

function Apostas({ quantidadeApostaProps }) {
  const URL_BASE_PROD = process.env.REACT_APP_BACKEND_URL ?
    process.env.REACT_APP_BACKEND_URL :
    'http://localhost:8080'

  axios.defaults.baseURL = URL_BASE_PROD
  const [apostas, setApostas] = useState([])

  const [quantidadeAposta, setQuantidadeAposta] = useState(quantidadeApostaProps)

  useEffect(() => {
    axios.get(`/gerar-apostas/${quantidadeAposta}`)
      .then(response => {
        setApostas(response.data);
      })
  }, [quantidadeAposta])

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Aposta</th>
          </tr>
        </thead>
        <tbody>
          {
            apostas?.map(aposta => (
              <tr>
                <td>{formatLocalDate(aposta.dataAposta, 'dd/MM/yyyy')}</td>
                <td>{aposta.dezenas.map(dezena => `${dezena} `)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Apostas;