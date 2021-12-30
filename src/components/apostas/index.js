import axios from "axios";
import { useEffect, useState } from "react";

function Apostas() {
  const URL_BASE_PROD = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';


  const [apostas, setApostas] = useState([])
  const [quantidadeAposta, setQuantidadeAposta] = useState(1)

  console.log('URL_BASE_PROD')
  console.log(URL_BASE_PROD)

  useEffect(() => {
    axios.get(`${URL_BASE_PROD}/gerar-apostas/${quantidadeAposta}`)
      .then(response => {
        setApostas(response.data);
      })
  }, [])

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
          <tr>
            <td>22/04/2021</td>
            <td>27,37,11,10,47,14</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Apostas;